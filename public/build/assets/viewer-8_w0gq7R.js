const Xt="srgb",Xi="srgb-linear",Cr="linear",je="srgb";const _a="300 es";function ch(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hh(){const n=qi("canvas");return n.style.display="block",n}const ga={};function va(...n){const e="THREE."+n.shift();console.log(e,...n)}function So(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function be(...n){n=So(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function He(...n){n=So(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function bs(...n){const e=n.join(" ");e in ga||(ga[e]=!0,be(...n))}function dh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const uh={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};class qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xa=1234567;const Ii=Math.PI/180,Yi=180/Math.PI;function Si(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function zs(n,e){return(n%e+e)%e}function fh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ph(n,e,t){return n!==e?(t-n)/(e-n):0}function Ui(n,e,t){return(1-t)*n+t*e}function mh(n,e,t,i){return Ui(n,e,1-Math.exp(-t*i))}function _h(n,e=1){return e-Math.abs(zs(n,e*2)-e)}function gh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function vh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function xh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Mh(n,e){return n+Math.random()*(e-n)}function Sh(n){return n*(.5-Math.random())}function Eh(n){n!==void 0&&(xa=n);let e=xa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Th(n){return n*Ii}function yh(n){return n*Yi}function bh(n){return(n&n-1)===0&&n!==0}function wh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ah(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ch(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),d=a((e+i)/2),u=s((e-i)/2),h=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":n.set(o*d,c*u,c*h,o*l);break;case"YZY":n.set(c*h,o*d,c*u,o*l);break;case"ZXZ":n.set(c*u,c*h,o*d,o*l);break;case"XZX":n.set(o*d,c*x,c*m,o*l);break;case"YXY":n.set(c*m,o*d,c*x,o*l);break;case"ZYZ":n.set(c*x,c*m,o*d,o*l);break;default:be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const qe={DEG2RAD:Ii,RAD2DEG:Yi,generateUUID:Si,clamp:Ge,euclideanModulo:zs,mapLinear:fh,inverseLerp:ph,lerp:Ui,damp:mh,pingpong:_h,smoothstep:gh,smootherstep:vh,randInt:xh,randFloat:Mh,randFloatSpread:Sh,seededRandom:Eh,degToRad:Th,radToDeg:yh,isPowerOfTwo:bh,ceilPowerOfTwo:wh,floorPowerOfTwo:Ah,setQuaternionFromProperEuler:Ch,normalize:Pt,denormalize:di},ia=class ia{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ia.prototype.isVector2=!0;let Xe=ia;class Yn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],d=i[r+2],u=i[r+3],h=s[a+0],m=s[a+1],x=s[a+2],E=s[a+3];if(u!==E||c!==h||l!==m||d!==x){let p=c*h+l*m+d*x+u*E;p<0&&(h=-h,m=-m,x=-x,E=-E,p=-p);let f=1-o;if(p<.9995){const S=Math.acos(p),b=Math.sin(S);f=Math.sin(f*S)/b,o=Math.sin(o*S)/b,c=c*f+h*o,l=l*f+m*o,d=d*f+x*o,u=u*f+E*o}else{c=c*f+h*o,l=l*f+m*o,d=d*f+x*o,u=u*f+E*o;const S=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=S,l*=S,d*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],d=i[r+3],u=s[a],h=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+d*u+c*m-l*h,e[t+1]=c*x+d*h+l*u-o*m,e[t+2]=l*x+d*m+o*h-c*u,e[t+3]=d*x-o*u-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),d=o(r/2),u=o(s/2),h=c(i/2),m=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=h*d*u+l*m*x,this._y=l*m*u-h*d*x,this._z=l*d*x+h*m*u,this._w=l*d*u-h*m*x;break;case"YXZ":this._x=h*d*u+l*m*x,this._y=l*m*u-h*d*x,this._z=l*d*x-h*m*u,this._w=l*d*u+h*m*x;break;case"ZXY":this._x=h*d*u-l*m*x,this._y=l*m*u+h*d*x,this._z=l*d*x+h*m*u,this._w=l*d*u-h*m*x;break;case"ZYX":this._x=h*d*u-l*m*x,this._y=l*m*u+h*d*x,this._z=l*d*x-h*m*u,this._w=l*d*u+h*m*x;break;case"YZX":this._x=h*d*u+l*m*x,this._y=l*m*u+h*d*x,this._z=l*d*x-h*m*u,this._w=l*d*u-h*m*x;break;case"XZY":this._x=h*d*u-l*m*x,this._y=l*m*u-h*d*x,this._z=l*d*x+h*m*u,this._w=l*d*u+h*m*x;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],u=t[10],h=i+o+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(d-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+a*o+r*l-s*c,this._y=r*d+a*c+s*o-i*l,this._z=s*d+a*l+i*c-r*o,this._w=a*d-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ra=class ra{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ma.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ma.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),d=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*d,this.y=i+c*d+o*l-s*u,this.z=r+c*u+s*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kr.copy(this).projectOnVector(e),this.sub(Kr)}reflect(e){return this.sub(Kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ra.prototype.isVector3=!0;let N=ra;const Kr=new N,Ma=new Yn,sa=class sa{constructor(e,t,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],d=i[4],u=i[7],h=i[2],m=i[5],x=i[8],E=r[0],p=r[3],f=r[6],S=r[1],b=r[4],T=r[7],P=r[2],y=r[5],R=r[8];return s[0]=a*E+o*S+c*P,s[3]=a*p+o*b+c*y,s[6]=a*f+o*T+c*R,s[1]=l*E+d*S+u*P,s[4]=l*p+d*b+u*y,s[7]=l*f+d*T+u*R,s[2]=h*E+m*S+x*P,s[5]=h*p+m*b+x*y,s[8]=h*f+m*T+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-i*s*d+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=d*a-o*l,h=o*c-d*s,m=l*s-a*c,x=t*u+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=u*E,e[1]=(r*l-d*i)*E,e[2]=(o*i-r*a)*E,e[3]=h*E,e[4]=(d*t-r*c)*E,e[5]=(r*s-o*t)*E,e[6]=m*E,e[7]=(i*c-l*t)*E,e[8]=(a*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($r.makeScale(e,t)),this}rotate(e){return this.premultiply($r.makeRotation(-e)),this}translate(e,t){return this.premultiply($r.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sa.prototype.isMatrix3=!0;let Re=sa;const $r=new Re,Sa=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ea=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rh(){const n={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===je&&(r.r=Mn(r.r),r.g=Mn(r.g),r.b=Mn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Cr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xi]:{primaries:e,whitePoint:i,transfer:Cr,toXYZ:Sa,fromXYZ:Ea,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:je,toXYZ:Sa,fromXYZ:Ea,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}const ze=Rh();function Mn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $n;class Ph{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$n===void 0&&($n=qi("canvas")),$n.width=e.width,$n.height=e.height;const r=$n.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$n}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qi("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mn(t[i]/255)*255):t[i]=Mn(t[i]);return{data:t,width:e.width,height:e.height}}else return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lh=0;class Gs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Jr(r[a].image)):s.push(Jr(r[a]))}else s=Jr(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Jr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ph.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}let Dh=0;const Qr=new N;class Rt extends qn{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,c=1009,l=Rt.DEFAULT_ANISOTROPY,d=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Si(),this.name="",this.source=new Gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qr).x}get height(){return this.source.getSize(Qr).y}get depth(){return this.source.getSize(Qr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){be(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=300;Rt.DEFAULT_ANISOTROPY=1;const aa=class aa{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],d=c[4],u=c[8],h=c[1],m=c[5],x=c[9],E=c[2],p=c[6],f=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-E)<.01&&Math.abs(x-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+E)<.1&&Math.abs(x+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,T=(m+1)/2,P=(f+1)/2,y=(d+h)/4,R=(u+E)/4,v=(x+p)/4;return b>T&&b>P?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=y/i,s=R/i):T>P?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=y/r,s=v/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=R/s,r=v/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-x)*(p-x)+(u-E)*(u-E)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(p-x)/S,this.y=(u-E)/S,this.z=(h-d)/S,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};aa.prototype.isVector4=!0;let ft=aa;class Ih extends qn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Rt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qt extends Ih{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Eo extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uh extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fr=class Fr{constructor(e,t,i,r,s,a,o,c,l,d,u,h,m,x,E,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,d,u,h,m,x,E,p)}set(e,t,i,r,s,a,o,c,l,d,u,h,m,x,E,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=d,f[10]=u,f[14]=h,f[3]=m,f[7]=x,f[11]=E,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fr().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Jn.setFromMatrixColumn(e,0).length(),s=1/Jn.setFromMatrixColumn(e,1).length(),a=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*d,m=a*u,x=o*d,E=o*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=m+x*l,t[5]=h-E*l,t[9]=-o*c,t[2]=E-h*l,t[6]=x+m*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*d,m=c*u,x=l*d,E=l*u;t[0]=h+E*o,t[4]=x*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=m*o-x,t[6]=E+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*d,m=c*u,x=l*d,E=l*u;t[0]=h-E*o,t[4]=-a*u,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*d,t[9]=E-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*d,m=a*u,x=o*d,E=o*u;t[0]=c*d,t[4]=x*l-m,t[8]=h*l+E,t[1]=c*u,t[5]=E*l+h,t[9]=m*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*l,x=o*c,E=o*l;t[0]=c*d,t[4]=E-h*u,t[8]=x*u+m,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=m*u+x,t[10]=h-E*u}else if(e.order==="XZY"){const h=a*c,m=a*l,x=o*c,E=o*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=h*u+E,t[5]=a*d,t[9]=m*u-x,t[2]=x*u-m,t[6]=o*d,t[10]=E*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fh,e,Nh)}lookAt(e,t,i){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),wn.crossVectors(i,Nt),wn.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),wn.crossVectors(i,Nt)),wn.normalize(),nr.crossVectors(Nt,wn),r[0]=wn.x,r[4]=nr.x,r[8]=Nt.x,r[1]=wn.y,r[5]=nr.y,r[9]=Nt.y,r[2]=wn.z,r[6]=nr.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],d=i[1],u=i[5],h=i[9],m=i[13],x=i[2],E=i[6],p=i[10],f=i[14],S=i[3],b=i[7],T=i[11],P=i[15],y=r[0],R=r[4],v=r[8],w=r[12],F=r[1],A=r[5],G=r[9],X=r[13],j=r[2],I=r[6],V=r[10],z=r[14],J=r[3],Q=r[7],ce=r[11],ve=r[15];return s[0]=a*y+o*F+c*j+l*J,s[4]=a*R+o*A+c*I+l*Q,s[8]=a*v+o*G+c*V+l*ce,s[12]=a*w+o*X+c*z+l*ve,s[1]=d*y+u*F+h*j+m*J,s[5]=d*R+u*A+h*I+m*Q,s[9]=d*v+u*G+h*V+m*ce,s[13]=d*w+u*X+h*z+m*ve,s[2]=x*y+E*F+p*j+f*J,s[6]=x*R+E*A+p*I+f*Q,s[10]=x*v+E*G+p*V+f*ce,s[14]=x*w+E*X+p*z+f*ve,s[3]=S*y+b*F+T*j+P*J,s[7]=S*R+b*A+T*I+P*Q,s[11]=S*v+b*G+T*V+P*ce,s[15]=S*w+b*X+T*z+P*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],u=e[6],h=e[10],m=e[14],x=e[3],E=e[7],p=e[11],f=e[15],S=c*m-l*h,b=o*m-l*u,T=o*h-c*u,P=a*m-l*d,y=a*h-c*d,R=a*u-o*d;return t*(E*S-p*b+f*T)-i*(x*S-p*P+f*y)+r*(x*b-E*P+f*R)-s*(x*T-E*y+p*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=e[9],h=e[10],m=e[11],x=e[12],E=e[13],p=e[14],f=e[15],S=t*o-i*a,b=t*c-r*a,T=t*l-s*a,P=i*c-r*o,y=i*l-s*o,R=r*l-s*c,v=d*E-u*x,w=d*p-h*x,F=d*f-m*x,A=u*p-h*E,G=u*f-m*E,X=h*f-m*p,j=S*X-b*G+T*A+P*F-y*w+R*v;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/j;return e[0]=(o*X-c*G+l*A)*I,e[1]=(r*G-i*X-s*A)*I,e[2]=(E*R-p*y+f*P)*I,e[3]=(h*y-u*R-m*P)*I,e[4]=(c*F-a*X-l*w)*I,e[5]=(t*X-r*F+s*w)*I,e[6]=(p*T-x*R-f*b)*I,e[7]=(d*R-h*T+m*b)*I,e[8]=(a*G-o*F+l*v)*I,e[9]=(i*F-t*G-s*v)*I,e[10]=(x*y-E*T+f*S)*I,e[11]=(u*T-d*y-m*S)*I,e[12]=(o*w-a*A-c*v)*I,e[13]=(t*A-i*w+r*v)*I,e[14]=(E*b-x*P-p*S)*I,e[15]=(d*P-u*b+h*S)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,d=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+i,d*c-r*a,0,l*c-r*o,d*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,d=a+a,u=o+o,h=s*l,m=s*d,x=s*u,E=a*d,p=a*u,f=o*u,S=c*l,b=c*d,T=c*u,P=i.x,y=i.y,R=i.z;return r[0]=(1-(E+f))*P,r[1]=(m+T)*P,r[2]=(x-b)*P,r[3]=0,r[4]=(m-T)*y,r[5]=(1-(h+f))*y,r[6]=(p+S)*y,r[7]=0,r[8]=(x+b)*R,r[9]=(p-S)*R,r[10]=(1-(h+E))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Jn.set(r[0],r[1],r[2]).length();const o=Jn.set(r[4],r[5],r[6]).length(),c=Jn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Zt.copy(this);const l=1/a,d=1/o,u=1/c;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=d,Zt.elements[5]*=d,Zt.elements[6]*=d,Zt.elements[8]*=u,Zt.elements[9]*=u,Zt.elements[10]*=u,t.setFromRotationMatrix(Zt),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=2e3,c=!1){const l=this.elements,d=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),m=(i+r)/(i-r);let x,E;if(c)x=s/(a-s),E=a*s/(a-s);else if(o===2e3)x=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===2001)x=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3,c=!1){const l=this.elements,d=2/(t-e),u=2/(i-r),h=-(t+e)/(t-e),m=-(i+r)/(i-r);let x,E;if(c)x=1/(a-s),E=a/(a-s);else if(o===2e3)x=-2/(a-s),E=-(a+s)/(a-s);else if(o===2001)x=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=x,l[14]=E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Fr.prototype.isMatrix4=!0;let pt=Fr;const Jn=new N,Zt=new pt,Fh=new N(0,0,0),Nh=new N(1,1,1),wn=new N,nr=new N,Nt=new N,Ta=new pt,ya=new Yn;class On{constructor(e=0,t=0,i=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],d=r[9],u=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ta.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ta,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ya.setFromEuler(this),this.setFromQuaternion(ya,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Hs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Oh=0;const ba=new N,Qn=new Yn,pn=new pt,ir=new N,yi=new N,Bh=new N,zh=new Yn,wa=new N(1,0,0),Aa=new N(0,1,0),Ca=new N(0,0,1),Ra={type:"added"},Gh={type:"removed"},ei={type:"childadded",child:null},es={type:"childremoved",child:null};class Gt extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new N,t=new On,i=new Yn,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Re}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis(wa,e)}rotateY(e){return this.rotateOnAxis(Aa,e)}rotateZ(e){return this.rotateOnAxis(Ca,e)}translateOnAxis(e,t){return ba.copy(e).applyQuaternion(this.quaternion),this.position.add(ba.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wa,e)}translateY(e){return this.translateOnAxis(Aa,e)}translateZ(e){return this.translateOnAxis(Ca,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ir.copy(e):ir.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(yi,ir,this.up):pn.lookAt(ir,yi,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),Qn.setFromRotationMatrix(pn),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ra),ei.child=e,this.dispatchEvent(ei),ei.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gh),es.child=e,this.dispatchEvent(es),es.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ra),ei.child=e,this.dispatchEvent(ei),ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,e,Bh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,zh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new N(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fi extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hh={type:"move"};class ts{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const E of e.hand.values()){const p=t.getJointPose(E,i),f=this._getHandJoint(l,E);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),m=.02,x=.005;l.inputState.pinching&&h>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hh)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const To={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},rr={h:0,s:0,l:0};function ns(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ze.workingColorSpace){if(e=zs(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ns(a,s,e+1/3),this.g=ns(a,s,e),this.b=ns(a,s,e-1/3)}return ze.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=To[e.toLowerCase()];return i!==void 0?this.setHex(i,t):be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return ze.workingToColorSpace(Ct.copy(this),e),Math.round(Ge(Ct.r*255,0,255))*65536+Math.round(Ge(Ct.g*255,0,255))*256+Math.round(Ge(Ct.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=d<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Xt){ze.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(rr);const i=Ui(An.h,rr.h,t),r=Ui(An.s,rr.s,t),s=Ui(An.l,rr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new et;et.NAMES=To;class Pa extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const jt=new N,mn=new N,is=new N,_n=new N,ti=new N,ni=new N,La=new N,rs=new N,ss=new N,as=new N,os=new ft,ls=new ft,cs=new ft;class Jt{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),jt.subVectors(e,t),r.cross(jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){jt.subVectors(r,t),mn.subVectors(i,t),is.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(mn),c=jt.dot(is),l=mn.dot(mn),d=mn.dot(is),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,m=(l*c-o*d)*h,x=(a*d-o*c)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,_n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,_n.x),c.addScaledVector(a,_n.y),c.addScaledVector(o,_n.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return os.setScalar(0),ls.setScalar(0),cs.setScalar(0),os.fromBufferAttribute(e,t),ls.fromBufferAttribute(e,i),cs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(os,s.x),a.addScaledVector(ls,s.y),a.addScaledVector(cs,s.z),a}static isFrontFacing(e,t,i,r){return jt.subVectors(i,t),mn.subVectors(e,t),jt.cross(mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),jt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ti.subVectors(r,i),ni.subVectors(s,i),rs.subVectors(e,i);const c=ti.dot(rs),l=ni.dot(rs);if(c<=0&&l<=0)return t.copy(i);ss.subVectors(e,r);const d=ti.dot(ss),u=ni.dot(ss);if(d>=0&&u<=d)return t.copy(r);const h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(i).addScaledVector(ti,a);as.subVectors(e,s);const m=ti.dot(as),x=ni.dot(as);if(x>=0&&m<=x)return t.copy(s);const E=m*l-c*x;if(E<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(i).addScaledVector(ni,o);const p=d*x-m*u;if(p<=0&&u-d>=0&&m-x>=0)return La.subVectors(s,r),o=(u-d)/(u-d+(m-x)),t.copy(r).addScaledVector(La,o);const f=1/(p+E+h);return a=E*f,o=h*f,t.copy(i).addScaledVector(ti,a).addScaledVector(ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ei{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(s,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sr.copy(i.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),ar.subVectors(this.max,bi),ii.subVectors(e.a,bi),ri.subVectors(e.b,bi),si.subVectors(e.c,bi),Cn.subVectors(ri,ii),Rn.subVectors(si,ri),Gn.subVectors(ii,si);let t=[0,-Cn.z,Cn.y,0,-Rn.z,Rn.y,0,-Gn.z,Gn.y,Cn.z,0,-Cn.x,Rn.z,0,-Rn.x,Gn.z,0,-Gn.x,-Cn.y,Cn.x,0,-Rn.y,Rn.x,0,-Gn.y,Gn.x,0];return!hs(t,ii,ri,si,ar)||(t=[1,0,0,0,1,0,0,0,1],!hs(t,ii,ri,si,ar))?!1:(or.crossVectors(Cn,Rn),t=[or.x,or.y,or.z],hs(t,ii,ri,si,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gn=[new N,new N,new N,new N,new N,new N,new N,new N],Kt=new N,sr=new Ei,ii=new N,ri=new N,si=new N,Cn=new N,Rn=new N,Gn=new N,bi=new N,ar=new N,or=new N,Hn=new N;function hs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Hn.fromArray(n,s);const o=r.x*Math.abs(Hn.x)+r.y*Math.abs(Hn.y)+r.z*Math.abs(Hn.z),c=e.dot(Hn),l=t.dot(Hn),d=i.dot(Hn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const mt=new N,lr=new Xe;let Vh=0;class dn extends qn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class yo extends dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bo extends dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Yt extends dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const kh=new Ei,wi=new N,ds=new N;class Vs{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):kh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wi.subVectors(e,this.center);const t=wi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(wi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ds.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wi.copy(e.center).add(ds)),this.expandByPoint(wi.copy(e.center).sub(ds))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Wh=0;const kt=new pt,us=new Gt,ai=new N,Ot=new Ei,Ai=new Ei,St=new N;class un extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ch(e)?bo:yo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Re().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,i){return kt.makeTranslation(e,t,i),this.applyMatrix4(kt),this}scale(e,t,i){return kt.makeScale(e,t,i),this.applyMatrix4(kt),this}lookAt(e){return us.lookAt(e),us.updateMatrix(),this.applyMatrix4(us.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ai.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Ot.min,Ai.min),Ot.expandByPoint(St),St.addVectors(Ot.max,Ai.max),Ot.expandByPoint(St)):(Ot.expandByPoint(Ai.min),Ot.expandByPoint(Ai.max))}Ot.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)St.fromBufferAttribute(o,l),c&&(ai.fromBufferAttribute(e,l),St.add(ai)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let v=0;v<i.count;v++)o[v]=new N,c[v]=new N;const l=new N,d=new N,u=new N,h=new Xe,m=new Xe,x=new Xe,E=new N,p=new N;function f(v,w,F){l.fromBufferAttribute(i,v),d.fromBufferAttribute(i,w),u.fromBufferAttribute(i,F),h.fromBufferAttribute(s,v),m.fromBufferAttribute(s,w),x.fromBufferAttribute(s,F),d.sub(l),u.sub(l),m.sub(h),x.sub(h);const A=1/(m.x*x.y-x.x*m.y);isFinite(A)&&(E.copy(d).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(A),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(A),o[v].add(E),o[w].add(E),o[F].add(E),c[v].add(p),c[w].add(p),c[F].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,w=S.length;v<w;++v){const F=S[v],A=F.start,G=F.count;for(let X=A,j=A+G;X<j;X+=3)f(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const b=new N,T=new N,P=new N,y=new N;function R(v){P.fromBufferAttribute(r,v),y.copy(P);const w=o[v];b.copy(w),b.sub(P.multiplyScalar(P.dot(w))).normalize(),T.crossVectors(y,w);const A=T.dot(c[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,A)}for(let v=0,w=S.length;v<w;++v){const F=S[v],A=F.start,G=F.count;for(let X=A,j=A+G;X<j;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,a=new N,o=new N,c=new N,l=new N,d=new N,u=new N;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),E=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,p),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,E),l.fromBufferAttribute(i,p),o.add(d),c.add(d),l.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,u=o.normalized,h=new l.constructor(c.length*d);let m=0,x=0;for(let E=0,p=c.length;E<p;E++){o.isInterleavedBufferAttribute?m=c[E]*o.data.stride+o.offset:m=c[E]*d;for(let f=0;f<d;f++)h[x++]=l[m++]}return new dn(h,d,u)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,u=l.length;d<u;d++){const h=l[d],m=e(h,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){const m=l[u];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],u=s[l];for(let h=0,m=u.length;h<m;h++)d.push(u[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Xh=0;class Nr extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){be(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(i.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vn=new N,fs=new N,cr=new N,Pn=new N,ps=new N,hr=new N,ms=new N;class wo{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fs.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(fs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(cr),o=Pn.dot(this.direction),c=-Pn.dot(cr),l=Pn.lengthSq(),d=Math.abs(1-a*a);let u,h,m,x;if(d>0)if(u=a*c-o,h=a*o-c,x=s*d,u>=0)if(h>=-x)if(h<=x){const E=1/d;u*=E,h*=E,m=u*(u+a*h+2*o)+h*(a*u+h+2*c)+l}else h=s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*c)+l;else h<=-x?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+h*(h+2*c)+l):h<=x?(u=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+h*(h+2*c)+l);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(fs).addScaledVector(cr,h),m}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const i=vn.dot(this.direction),r=vn.dot(vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,i,r,s){ps.subVectors(t,e),hr.subVectors(i,e),ms.crossVectors(ps,hr);let a=this.direction.dot(ms),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,e);const c=o*this.direction.dot(hr.crossVectors(Pn,hr));if(c<0)return null;const l=o*this.direction.dot(ps.cross(Pn));if(l<0||c+l>a)return null;const d=-o*Pn.dot(ms);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ji extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Da=new pt,Vn=new wo,dr=new Vs,Ia=new N,ur=new N,fr=new N,pr=new N,_s=new N,mr=new N,Ua=new N,_r=new N;class Ht extends Gt{constructor(e=new un,t=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){mr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],u=s[c];d!==0&&(_s.fromBufferAttribute(u,e),a?mr.addScaledVector(_s,d):mr.addScaledVector(_s.sub(t),d))}t.add(mr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(s),Vn.copy(e.ray).recast(e.near),!(dr.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(dr,Ia)===null||Vn.origin.distanceToSquared(Ia)>(e.far-e.near)**2))&&(Da.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(Da),!(i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,E=h.length;x<E;x++){const p=h[x],f=a[p.materialIndex],S=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=S,P=b;T<P;T+=3){const y=o.getX(T),R=o.getX(T+1),v=o.getX(T+2);r=gr(this,f,e,i,l,d,u,y,R,v),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let p=x,f=E;p<f;p+=3){const S=o.getX(p),b=o.getX(p+1),T=o.getX(p+2);r=gr(this,a,e,i,l,d,u,S,b,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,E=h.length;x<E;x++){const p=h[x],f=a[p.materialIndex],S=Math.max(p.start,m.start),b=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let T=S,P=b;T<P;T+=3){const y=T,R=T+1,v=T+2;r=gr(this,f,e,i,l,d,u,y,R,v),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(c.count,m.start+m.count);for(let p=x,f=E;p<f;p+=3){const S=p,b=p+1,T=p+2;r=gr(this,a,e,i,l,d,u,S,b,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function qh(n,e,t,i,r,s,a,o){let c;if(e.side===1?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===0,o),c===null)return null;_r.copy(o),_r.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(_r);return l<t.near||l>t.far?null:{distance:l,point:_r.clone(),object:n}}function gr(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,ur),n.getVertexPosition(c,fr),n.getVertexPosition(l,pr);const d=qh(n,e,t,i,ur,fr,pr,Ua);if(d){const u=new N;Jt.getBarycoord(Ua,ur,fr,pr,u),r&&(d.uv=Jt.getInterpolatedAttribute(r,o,c,l,u,new Xe)),s&&(d.uv1=Jt.getInterpolatedAttribute(s,o,c,l,u,new Xe)),a&&(d.normal=Jt.getInterpolatedAttribute(a,o,c,l,u,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new N,materialIndex:0};Jt.getNormal(ur,fr,pr,h.normal),d.face=h,d.barycoord=u}return d}class Yh extends Rt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=1003,d=1003,u,h){super(null,a,o,c,l,d,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gs=new N,Zh=new N,jh=new Re;class Wn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=gs.subVectors(i,t).cross(Zh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(gs),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jh.getNormalMatrix(e),r=this.coplanarPoint(gs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Vs,Kh=new Xe(.5,.5),vr=new N;class ks{constructor(e=new Wn,t=new Wn,i=new Wn,r=new Wn,s=new Wn,a=new Wn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],d=s[4],u=s[5],h=s[6],m=s[7],x=s[8],E=s[9],p=s[10],f=s[11],S=s[12],b=s[13],T=s[14],P=s[15];if(r[0].setComponents(l-a,m-d,f-x,P-S).normalize(),r[1].setComponents(l+a,m+d,f+x,P+S).normalize(),r[2].setComponents(l+o,m+u,f+E,P+b).normalize(),r[3].setComponents(l-o,m-u,f-E,P-b).normalize(),i)r[4].setComponents(c,h,p,T).normalize(),r[5].setComponents(l-c,m-h,f-p,P-T).normalize();else if(r[4].setComponents(l-c,m-h,f-p,P-T).normalize(),t===2e3)r[5].setComponents(l+c,m+h,f+p,P+T).normalize();else if(t===2001)r[5].setComponents(c,h,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){kn.center.set(0,0,0);const t=Kh.distanceTo(e.center);return kn.radius=.7071067811865476+t,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(vr.x=r.normal.x>0?e.max.x:e.min.x,vr.y=r.normal.y>0?e.max.y:e.min.y,vr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ao extends Rt{constructor(e=[],t=301,i,r,s,a,o,c,l,d){super(e,t,i,r,s,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gi extends Rt{constructor(e,t,i=1014,r,s,a,o=1003,c=1003,l,d=1026,u=1){if(d!==1026&&d!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,r,s,a,o,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $h extends gi{constructor(e,t=1014,i=301,r,s,a=1003,o=1003,c,l=1026){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,i,r,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Co extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ki extends un{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],u=[];let h=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(u,2));function x(E,p,f,S,b,T,P,y,R,v,w){const F=T/R,A=P/v,G=T/2,X=P/2,j=y/2,I=R+1,V=v+1;let z=0,J=0;const Q=new N;for(let ce=0;ce<V;ce++){const ve=ce*A-X;for(let Ee=0;Ee<I;Ee++){const Ve=Ee*F-G;Q[E]=Ve*S,Q[p]=ve*b,Q[f]=j,l.push(Q.x,Q.y,Q.z),Q[E]=0,Q[p]=0,Q[f]=y>0?1:-1,d.push(Q.x,Q.y,Q.z),u.push(Ee/R),u.push(1-ce/v),z+=1}}for(let ce=0;ce<v;ce++)for(let ve=0;ve<R;ve++){const Ee=h+ve+I*ce,Ve=h+ve+I*(ce+1),Ke=h+(ve+1)+I*(ce+1),De=h+(ve+1)+I*ce;c.push(Ee,Ve,De),c.push(Ve,Ke,De),J+=6}o.addGroup(m,J,w),m+=J,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Or extends un{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,d=c+1,u=e/o,h=t/c,m=[],x=[],E=[],p=[];for(let f=0;f<d;f++){const S=f*h-a;for(let b=0;b<l;b++){const T=b*u-s;x.push(T,-S,0),E.push(0,0,1),p.push(b/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){const b=S+l*f,T=S+l*(f+1),P=S+1+l*(f+1),y=S+1+l*f;m.push(b,T,y),m.push(T,P,y)}this.setIndex(m),this.setAttribute("position",new Yt(x,3)),this.setAttribute("normal",new Yt(E,3)),this.setAttribute("uv",new Yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}class vi extends un{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const d=[],u=new N,h=new N,m=[],x=[],E=[],p=[];for(let f=0;f<=i;f++){const S=[],b=f/i;let T=0;f===0&&a===0?T=.5/t:f===i&&c===Math.PI&&(T=-.5/t);for(let P=0;P<=t;P++){const y=P/t;u.x=-e*Math.cos(r+y*s)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(r+y*s)*Math.sin(a+b*o),x.push(u.x,u.y,u.z),h.copy(u).normalize(),E.push(h.x,h.y,h.z),p.push(y+T,1-b),S.push(l++)}d.push(S)}for(let f=0;f<i;f++)for(let S=0;S<t;S++){const b=d[f][S+1],T=d[f][S],P=d[f+1][S],y=d[f+1][S+1];(f!==0||a>0)&&m.push(b,T,y),(f!==i-1||c<Math.PI)&&m.push(T,P,y)}this.setIndex(m),this.setAttribute("position",new Yt(x,3)),this.setAttribute("normal",new Yt(E,3)),this.setAttribute("uv",new Yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function xi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Fa(r))r.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Fa(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=xi(n[t]);for(const r in i)e[r]=i[r]}return e}function Fa(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Jh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ro(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const Qh={clone:xi,merge:Lt};var ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ed,this.fragmentShader=td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=Jh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nd extends en{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class id extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rd extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const In={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Na(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Na(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Na(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class sd{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){const u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=l.length;u<h;u+=2){const m=l[u],x=l[u+1];if(m.global&&(m.lastIndex=0),m.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ad=new sd;let Ws=class{constructor(e){this.manager=e!==void 0?e:ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const xn={};class od extends Error{constructor(e,t){super(e),this.response=t}}class ld extends Ws{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=In.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(xn[e]!==void 0){xn[e].push({onLoad:t,onProgress:i,onError:r});return}xn[e]=[],xn[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=xn[e],u=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=h?parseInt(h):0,x=m!==0;let E=0;const p=new ReadableStream({start(f){S();function S(){u.read().then(({done:b,value:T})=>{if(b)f.close();else{E+=T.byteLength;const P=new ProgressEvent("progress",{lengthComputable:x,loaded:E,total:m});for(let y=0,R=d.length;y<R;y++){const v=d[y];v.onProgress&&v.onProgress(P)}f.enqueue(T),S()}},b=>{f.error(b)})}}});return new Response(p)}else throw new od(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(h);return l.arrayBuffer().then(x=>m.decode(x))}}}).then(l=>{In.add(`file:${e}`,l);const d=xn[e];delete xn[e];for(let u=0,h=d.length;u<h;u++){const m=d[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const d=xn[e];if(d===void 0)throw this.manager.itemError(e),l;delete xn[e];for(let u=0,h=d.length;u<h;u++){const m=d[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const oi=new WeakMap;class cd extends Ws{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=In.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=oi.get(a);u===void 0&&(u=[],oi.set(a,u)),u.push({onLoad:t,onError:r})}return a}const o=qi("img");function c(){d(),t&&t(this);const u=oi.get(this)||[];for(let h=0;h<u.length;h++){const m=u[h];m.onLoad&&m.onLoad(this)}oi.delete(this),s.manager.itemEnd(e)}function l(u){d(),r&&r(u),In.remove(`image:${e}`);const h=oi.get(this)||[];for(let m=0;m<h.length;m++){const x=h[m];x.onError&&x.onError(u)}oi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),In.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}const xr=new N,Mr=new Yn,sn=new N;class Po extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xr,Mr,sn),sn.x===1&&sn.y===1&&sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,Mr,sn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(xr,Mr,sn),sn.x===1&&sn.y===1&&sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,Mr,sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new N,Oa=new Xe,Ba=new Xe;class qt extends Po{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ii*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(Ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,Oa,Ba),t.subVectors(Ba,Oa)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ii*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Lo extends Po{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const li=-90,ci=1;class hd extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(li,ci,e,t);r.layers=this.layers,this.add(r);const s=new qt(li,ci,e,t);s.layers=this.layers,this.add(s);const a=new qt(li,ci,e,t);a.layers=this.layers,this.add(a);const o=new qt(li,ci,e,t);o.layers=this.layers,this.add(o);const c=new qt(li,ci,e,t);c.layers=this.layers,this.add(c);const l=new qt(li,ci,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class dd extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const za=new pt;class ud{constructor(e,t,i=0,r=1/0){this.ray=new wo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):He("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return za.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(za),this}intersectObject(e,t=!0,i=[]){return ws(e,this,i,t),i.sort(Ga),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ws(e[r],this,i,t);return i.sort(Ga),i}}function Ga(n,e){return n.distance-e.distance}function ws(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)ws(s[a],e,t,!0)}}const oa=class oa{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};oa.prototype.isMatrix2=!0;let Ha=oa;function Va(n,e,t,i){const r=fd(i);switch(t){case 1021:return n*e;case 1028:return n*e/r.components*r.byteLength;case 1029:return n*e/r.components*r.byteLength;case 1030:return n*e*2/r.components*r.byteLength;case 1031:return n*e*2/r.components*r.byteLength;case 1022:return n*e*3/r.components*r.byteLength;case 1023:return n*e*4/r.components*r.byteLength;case 1033:return n*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fd(n){switch(n){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function Do(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function pd(n){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,u=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,d),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const d=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,d);else{u.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<u.length;m++){const x=u[h],E=u[m];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++h,u[h]=E)}u.length=h+1;for(let m=0,x=u.length;m<x;m++){const E=u[m];n.bufferSubData(l,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ad=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Bd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",qd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,su=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,au=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ou=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_u=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gu=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,vu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Au=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ru=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Du=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Xu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ju=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ku=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ju=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ef=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,df=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,If=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ff=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Of=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:md,alphahash_pars_fragment:_d,alphamap_fragment:gd,alphamap_pars_fragment:vd,alphatest_fragment:xd,alphatest_pars_fragment:Md,aomap_fragment:Sd,aomap_pars_fragment:Ed,batching_pars_vertex:Td,batching_vertex:yd,begin_vertex:bd,beginnormal_vertex:wd,bsdfs:Ad,iridescence_fragment:Cd,bumpmap_pars_fragment:Rd,clipping_planes_fragment:Pd,clipping_planes_pars_fragment:Ld,clipping_planes_pars_vertex:Dd,clipping_planes_vertex:Id,color_fragment:Ud,color_pars_fragment:Fd,color_pars_vertex:Nd,color_vertex:Od,common:Bd,cube_uv_reflection_fragment:zd,defaultnormal_vertex:Gd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Vd,emissivemap_fragment:kd,emissivemap_pars_fragment:Wd,colorspace_fragment:Xd,colorspace_pars_fragment:qd,envmap_fragment:Yd,envmap_common_pars_fragment:Zd,envmap_pars_fragment:jd,envmap_pars_vertex:Kd,envmap_physical_pars_fragment:ou,envmap_vertex:$d,fog_vertex:Jd,fog_pars_vertex:Qd,fog_fragment:eu,fog_pars_fragment:tu,gradientmap_pars_fragment:nu,lightmap_pars_fragment:iu,lights_lambert_fragment:ru,lights_lambert_pars_fragment:su,lights_pars_begin:au,lights_toon_fragment:lu,lights_toon_pars_fragment:cu,lights_phong_fragment:hu,lights_phong_pars_fragment:du,lights_physical_fragment:uu,lights_physical_pars_fragment:fu,lights_fragment_begin:pu,lights_fragment_maps:mu,lights_fragment_end:_u,lightprobes_pars_fragment:gu,logdepthbuf_fragment:vu,logdepthbuf_pars_fragment:xu,logdepthbuf_pars_vertex:Mu,logdepthbuf_vertex:Su,map_fragment:Eu,map_pars_fragment:Tu,map_particle_fragment:yu,map_particle_pars_fragment:bu,metalnessmap_fragment:wu,metalnessmap_pars_fragment:Au,morphinstance_vertex:Cu,morphcolor_vertex:Ru,morphnormal_vertex:Pu,morphtarget_pars_vertex:Lu,morphtarget_vertex:Du,normal_fragment_begin:Iu,normal_fragment_maps:Uu,normal_pars_fragment:Fu,normal_pars_vertex:Nu,normal_vertex:Ou,normalmap_pars_fragment:Bu,clearcoat_normal_fragment_begin:zu,clearcoat_normal_fragment_maps:Gu,clearcoat_pars_fragment:Hu,iridescence_pars_fragment:Vu,opaque_fragment:ku,packing:Wu,premultiplied_alpha_fragment:Xu,project_vertex:qu,dithering_fragment:Yu,dithering_pars_fragment:Zu,roughnessmap_fragment:ju,roughnessmap_pars_fragment:Ku,shadowmap_pars_fragment:$u,shadowmap_pars_vertex:Ju,shadowmap_vertex:Qu,shadowmask_pars_fragment:ef,skinbase_vertex:tf,skinning_pars_vertex:nf,skinning_vertex:rf,skinnormal_vertex:sf,specularmap_fragment:af,specularmap_pars_fragment:of,tonemapping_fragment:lf,tonemapping_pars_fragment:cf,transmission_fragment:hf,transmission_pars_fragment:df,uv_pars_fragment:uf,uv_pars_vertex:ff,uv_vertex:pf,worldpos_vertex:mf,background_vert:_f,background_frag:gf,backgroundCube_vert:vf,backgroundCube_frag:xf,cube_vert:Mf,cube_frag:Sf,depth_vert:Ef,depth_frag:Tf,distance_vert:yf,distance_frag:bf,equirect_vert:wf,equirect_frag:Af,linedashed_vert:Cf,linedashed_frag:Rf,meshbasic_vert:Pf,meshbasic_frag:Lf,meshlambert_vert:Df,meshlambert_frag:If,meshmatcap_vert:Uf,meshmatcap_frag:Ff,meshnormal_vert:Nf,meshnormal_frag:Of,meshphong_vert:Bf,meshphong_frag:zf,meshphysical_vert:Gf,meshphysical_frag:Hf,meshtoon_vert:Vf,meshtoon_frag:kf,points_vert:Wf,points_frag:Xf,shadow_vert:qf,shadow_frag:Yf,sprite_vert:Zf,sprite_frag:jf},le={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},cn={basic:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Lt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Lt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new et(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Lt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Lt([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Lt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Lt([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Lt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Lt([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Lt([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Lt([le.lights,le.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};cn.physical={uniforms:Lt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Sr={r:0,b:0,g:0},Kf=new pt,Io=new Re;Io.set(-1,0,0,0,1,0,0,0,1);function $f(n,e,t,i,r,s){const a=new et(0);let o=r===!0?0:1,c,l,d=null,u=0,h=null;function m(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){const T=S.backgroundBlurriness>0;b=e.get(b,T)}return b}function x(S){let b=!1;const T=m(S);T===null?p(a,o):T&&T.isColor&&(p(T,1),b=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(S,b){const T=m(b);T&&(T.isCubeTexture||T.mapping===306)?(l===void 0&&(l=new Ht(new Ki(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:xi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(P,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=T,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Kf.makeRotationFromEuler(b.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Io),l.material.toneMapped=ze.getTransfer(T.colorSpace)!==je,(d!==T||u!==T.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=T,u=T.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ht(new Or(2,2),new en({name:"BackgroundMaterial",uniforms:xi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ze.getTransfer(T.colorSpace)!==je,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||u!==T.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=T,u=T.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,b){S.getRGB(Sr,Ro(n)),t.buffers.color.setClear(Sr.r,Sr.g,Sr.b,b,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:x,addToRenderList:E,dispose:f}}function Jf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(A,G,X,j,I){let V=!1;const z=u(A,j,X,G);s!==z&&(s=z,l(s.object)),V=m(A,j,X,I),V&&x(A,j,X,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,T(A,G,X,j),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return n.createVertexArray()}function l(A){return n.bindVertexArray(A)}function d(A){return n.deleteVertexArray(A)}function u(A,G,X,j){const I=j.wireframe===!0;let V=i[G.id];V===void 0&&(V={},i[G.id]=V);const z=A.isInstancedMesh===!0?A.id:0;let J=V[z];J===void 0&&(J={},V[z]=J);let Q=J[X.id];Q===void 0&&(Q={},J[X.id]=Q);let ce=Q[I];return ce===void 0&&(ce=h(c()),Q[I]=ce),ce}function h(A){const G=[],X=[],j=[];for(let I=0;I<t;I++)G[I]=0,X[I]=0,j[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:X,attributeDivisors:j,object:A,attributes:{},index:null}}function m(A,G,X,j){const I=s.attributes,V=G.attributes;let z=0;const J=X.getAttributes();for(const Q in J)if(J[Q].location>=0){const ve=I[Q];let Ee=V[Q];if(Ee===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(Ee=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(Ee=A.instanceColor)),ve===void 0||ve.attribute!==Ee||Ee&&ve.data!==Ee.data)return!0;z++}return s.attributesNum!==z||s.index!==j}function x(A,G,X,j){const I={},V=G.attributes;let z=0;const J=X.getAttributes();for(const Q in J)if(J[Q].location>=0){let ve=V[Q];ve===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(ve=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(ve=A.instanceColor));const Ee={};Ee.attribute=ve,ve&&ve.data&&(Ee.data=ve.data),I[Q]=Ee,z++}s.attributes=I,s.attributesNum=z,s.index=j}function E(){const A=s.newAttributes;for(let G=0,X=A.length;G<X;G++)A[G]=0}function p(A){f(A,0)}function f(A,G){const X=s.newAttributes,j=s.enabledAttributes,I=s.attributeDivisors;X[A]=1,j[A]===0&&(n.enableVertexAttribArray(A),j[A]=1),I[A]!==G&&(n.vertexAttribDivisor(A,G),I[A]=G)}function S(){const A=s.newAttributes,G=s.enabledAttributes;for(let X=0,j=G.length;X<j;X++)G[X]!==A[X]&&(n.disableVertexAttribArray(X),G[X]=0)}function b(A,G,X,j,I,V,z){z===!0?n.vertexAttribIPointer(A,G,X,I,V):n.vertexAttribPointer(A,G,X,j,I,V)}function T(A,G,X,j){E();const I=j.attributes,V=X.getAttributes(),z=G.defaultAttributeValues;for(const J in V){const Q=V[J];if(Q.location>=0){let ce=I[J];if(ce===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor)),ce!==void 0){const ve=ce.normalized,Ee=ce.itemSize,Ve=e.get(ce);if(Ve===void 0)continue;const Ke=Ve.buffer,De=Ve.type,Z=Ve.bytesPerElement,ue=De===n.INT||De===n.UNSIGNED_INT||ce.gpuType===1013;if(ce.isInterleavedBufferAttribute){const ie=ce.data,ye=ie.stride,Ce=ce.offset;if(ie.isInstancedInterleavedBuffer){for(let we=0;we<Q.locationSize;we++)f(Q.location+we,ie.meshPerAttribute);A.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let we=0;we<Q.locationSize;we++)p(Q.location+we);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let we=0;we<Q.locationSize;we++)b(Q.location+we,Ee/Q.locationSize,De,ve,ye*Z,(Ce+Ee/Q.locationSize*we)*Z,ue)}else{if(ce.isInstancedBufferAttribute){for(let ie=0;ie<Q.locationSize;ie++)f(Q.location+ie,ce.meshPerAttribute);A.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ie=0;ie<Q.locationSize;ie++)p(Q.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let ie=0;ie<Q.locationSize;ie++)b(Q.location+ie,Ee/Q.locationSize,De,ve,Ee*Z,Ee/Q.locationSize*ie*Z,ue)}}else if(z!==void 0){const ve=z[J];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(Q.location,ve);break;case 3:n.vertexAttrib3fv(Q.location,ve);break;case 4:n.vertexAttrib4fv(Q.location,ve);break;default:n.vertexAttrib1fv(Q.location,ve)}}}}S()}function P(){w();for(const A in i){const G=i[A];for(const X in G){const j=G[X];for(const I in j){const V=j[I];for(const z in V)d(V[z].object),delete V[z];delete j[I]}}delete i[A]}}function y(A){if(i[A.id]===void 0)return;const G=i[A.id];for(const X in G){const j=G[X];for(const I in j){const V=j[I];for(const z in V)d(V[z].object),delete V[z];delete j[I]}}delete i[A.id]}function R(A){for(const G in i){const X=i[G];for(const j in X){const I=X[j];if(I[A.id]===void 0)continue;const V=I[A.id];for(const z in V)d(V[z].object),delete V[z];delete I[A.id]}}}function v(A){for(const G in i){const X=i[G],j=A.isInstancedMesh===!0?A.id:0,I=X[j];if(I!==void 0){for(const V in I){const z=I[V];for(const J in z)d(z[J].object),delete z[J];delete I[V]}delete X[j],Object.keys(X).length===0&&delete i[G]}}}function w(){F(),a=!0,s!==r&&(s=r,l(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:F,dispose:P,releaseStatesOfGeometry:y,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:p,disableUnusedAttributes:S}}function Qf(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,d){d!==0&&(n.drawArraysInstanced(i,c,l,d),t.update(l,i,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,d);let h=0;for(let m=0;m<d;m++)h+=l[m];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function ep(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==1023&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==1009&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==1015&&!v)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(be("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=n.getParameter(n.MAX_SAMPLES),y=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:T,maxSamples:P,samples:y}}function tp(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Wn,o=new Re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const m=u.length!==0||h||i!==0||r;return r=h,i=u.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,m){const x=u.clippingPlanes,E=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!r||x===null||x.length===0||s&&!p)s?d(null):l();else{const S=s?0:i,b=S*4;let T=f.clippingState||null;c.value=T,T=d(x,h,b,m);for(let P=0;P!==b;++P)T[P]=t[P];f.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,m,x){const E=u!==null?u.length:0;let p=null;if(E!==0){if(p=c.value,x!==!0||p===null){const f=m+E*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,T=m;b!==E;++b,T+=4)a.copy(u[b]).applyMatrix4(S,o),a.normal.toArray(p,T),p[T+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}const Dn=4,ka=[.125,.215,.35,.446,.526,.582],Xn=20,np=256,Ci=new Lo,Wa=new et;let vs=null,xs=0,Ms=0,Ss=!1;const ip=new N;class Xa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=ip}=s;vs=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vs,xs,Ms),this._renderer.xr.enabled=Ss,e.scissorTest=!1,hi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vs=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Xi,depthBuffer:!1},r=qa(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qa(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rp(s)),this._blurMaterial=ap(s,e,t),this._ggxMaterial=sp(s,e,t)}return r}_compileMaterial(e){const t=new Ht(new un,e);this._renderer.compile(t,Ci)}_sceneToCubeUV(e,t,i,r,s){const c=new qt(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,m=u.toneMapping;u.getClearColor(Wa),u.toneMapping=0,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ht(new Ki,new ji({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,p=E.material;let f=!1;const S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,f=!0):(p.color.copy(Wa),f=!0);for(let b=0;b<6;b++){const T=b%3;T===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[b],s.y,s.z)):T===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[b]));const P=this._cubeSize;hi(r,T*P,b>2?P:0,P,P),u.setRenderTarget(r),f&&u.render(E,c),u.render(e,c)}u.toneMapping=m,u.autoClear=h,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ya());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;hi(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Ci)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-d*d),h=0+l*1.25,m=u*h,{_lodMax:x}=this,E=this._sizeLods[i],p=3*E*(i>x-Dn?i-x+Dn:0),f=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=x-t,hi(s,p,f,3*E,2*E),r.setRenderTarget(s),r.render(o,Ci),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-i,hi(e,p,f,3*E,2*E),r.setRenderTarget(e),r.render(o,Ci)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");const d=3,u=this._lodMeshes[r];u.material=l;const h=l.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Xn-1),E=s/x,p=isFinite(s)?1+Math.floor(d*E):Xn;p>Xn&&be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xn}`);const f=[];let S=0;for(let R=0;R<Xn;++R){const v=R/E,w=Math.exp(-v*v/2);f.push(w),R===0?S+=w:R<p&&(S+=2*w)}for(let R=0;R<f.length;R++)f[R]=f[R]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=x,h.mipInt.value=b-i;const T=this._sizeLods[r],P=3*T*(r>b-Dn?r-b+Dn:0),y=4*(this._cubeSize-T);hi(t,P,y,3*T,2*T),c.setRenderTarget(t),c.render(u,Ci)}}function rp(n){const e=[],t=[],i=[];let r=n;const s=n-Dn+1+ka.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Dn?c=ka[a-n+Dn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),d=-l,u=1+l,h=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,x=6,E=3,p=2,f=1,S=new Float32Array(E*x*m),b=new Float32Array(p*x*m),T=new Float32Array(f*x*m);for(let y=0;y<m;y++){const R=y%3*2/3-1,v=y>2?0:-1,w=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];S.set(w,E*x*y),b.set(h,p*x*y);const F=[y,y,y,y,y,y];T.set(F,f*x*y)}const P=new un;P.setAttribute("position",new dn(S,E)),P.setAttribute("uv",new dn(b,p)),P.setAttribute("faceIndex",new dn(T,f)),i.push(new Ht(P,null)),r>Dn&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function qa(n,e,t){const i=new Qt(n,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function sp(n,e,t){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:np,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Br(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ap(n,e,t){const i=new Float32Array(Xn),r=new N(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ya(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Za(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Br(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Uo extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ao(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ki(5,5,5),s=new en({name:"CubemapFromEquirect",uniforms:xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new Ht(r,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new hd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function op(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,m=!1){return h==null?null:m?a(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===303||m===304)if(e.has(h)){const x=e.get(h).texture;return o(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const E=new Uo(x.height);return E.fromEquirectangularTexture(n,h),e.set(h,E),h.addEventListener("dispose",l),o(E.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,x=m===303||m===304,E=m===301||m===302;if(x||E){let p=t.get(h);const f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new Xa(n)),p=x?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const S=h.image;return x&&S&&S.height>0||E&&S&&c(S)?(i===null&&(i=new Xa(n)),p=x?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",d),p.texture):null}}}return h}function o(h,m){return m===303?h.mapping=301:m===304&&(h.mapping=302),h}function c(h){let m=0;const x=6;for(let E=0;E<x;E++)h[E]!==void 0&&m++;return m===x}function l(h){const m=h.target;m.removeEventListener("dispose",l);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function d(h){const m=h.target;m.removeEventListener("dispose",d);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:u}}function lp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&bs("WebGLRenderer: "+i+" extension not supported."),r}}}function cp(n,e,t,i){const r={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(u){const h=u.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function l(u){const h=[],m=u.index,x=u.attributes.position;let E=0;if(x===void 0)return;if(m!==null){const S=m.array;E=m.version;for(let b=0,T=S.length;b<T;b+=3){const P=S[b+0],y=S[b+1],R=S[b+2];h.push(P,y,y,R,R,P)}}else{const S=x.array;E=x.version;for(let b=0,T=S.length/3-1;b<T;b+=3){const P=b+0,y=b+1,R=b+2;h.push(P,y,y,R,R,P)}}const p=new(x.count>=65535?bo:yo)(h,1);p.version=E;const f=s.get(u);f&&e.remove(f),s.set(u,p)}function d(u){const h=s.get(u);if(h){const m=u.index;m!==null&&h.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function hp(n,e,t){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function c(u,h){n.drawElements(i,h,s,u*a),t.update(h,i,1)}function l(u,h,m){m!==0&&(n.drawElementsInstanced(i,h,s,u*a,m),t.update(h,i,m))}function d(u,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,u,0,m);let E=0;for(let p=0;p<m;p++)E+=h[p];t.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function dp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function up(n,e,t){const i=new WeakMap,r=new ft;function s(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==u){let F=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",F)};var m=F;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;x===!0&&(T=1),E===!0&&(T=2),p===!0&&(T=3);let P=o.attributes.position.count*T,y=1;P>e.maxTextureSize&&(y=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*y*4*u),v=new Eo(R,P,y,u);v.type=1015,v.needsUpdate=!0;const w=T*4;for(let A=0;A<u;A++){const G=f[A],X=S[A],j=b[A],I=P*y*4*A;for(let V=0;V<G.count;V++){const z=V*w;x===!0&&(r.fromBufferAttribute(G,V),R[I+z+0]=r.x,R[I+z+1]=r.y,R[I+z+2]=r.z,R[I+z+3]=0),E===!0&&(r.fromBufferAttribute(X,V),R[I+z+4]=r.x,R[I+z+5]=r.y,R[I+z+6]=r.z,R[I+z+7]=0),p===!0&&(r.fromBufferAttribute(j,V),R[I+z+8]=r.x,R[I+z+9]=r.y,R[I+z+10]=r.z,R[I+z+11]=j.itemSize===4?r.w:1)}}h={count:u,texture:v,size:new Xe(P,y)},i.set(o,h),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let x=0;for(let p=0;p<l.length;p++)x+=l[p];const E=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(n,"morphTargetBaseInfluence",E),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function fp(n,e,t,i,r){let s=new WeakMap;function a(l){const d=r.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==d&&(m.update(),s.set(m,d))}return h}function o(){s=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const pp={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function mp(n,e,t,i,r){const s=new Qt(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new gi(e,t):void 0}),a=new Qt(e,t,{type:1016,depthBuffer:!1,stencilBuffer:!1}),o=new un;o.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Yt([0,2,0,0,2,0],2));const c=new nd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Ht(o,c),d=new Lo(-1,1,1,-1,0,1);let u=null,h=null,m=!1,x,E=null,p=[],f=!1;this.setSize=function(S,b){s.setSize(S,b),a.setSize(S,b);for(let T=0;T<p.length;T++){const P=p[T];P.setSize&&P.setSize(S,b)}},this.setEffects=function(S){p=S,f=p.length>0&&p[0].isRenderPass===!0;const b=s.width,T=s.height;for(let P=0;P<p.length;P++){const y=p[P];y.setSize&&y.setSize(b,T)}},this.begin=function(S,b){if(m||S.toneMapping===0&&p.length===0)return!1;if(E=b,b!==null){const T=b.width,P=b.height;(s.width!==T||s.height!==P)&&this.setSize(T,P)}return f===!1&&S.setRenderTarget(s),x=S.toneMapping,S.toneMapping=0,!0},this.hasRenderPass=function(){return f},this.end=function(S,b){S.toneMapping=x,m=!0;let T=s,P=a;for(let y=0;y<p.length;y++){const R=p[y];if(R.enabled!==!1&&(R.render(S,P,T,b),R.needsSwap!==!1)){const v=T;T=P,P=v}}if(u!==S.outputColorSpace||h!==S.toneMapping){u=S.outputColorSpace,h=S.toneMapping,c.defines={},ze.getTransfer(u)===je&&(c.defines.SRGB_TRANSFER="");const y=pp[h];y&&(c.defines[y]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(E),S.render(l,d),E=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Fo=new Rt,As=new gi(1,1),No=new Eo,Oo=new Uh,Bo=new Ao,ja=[],Ka=[],$a=new Float32Array(16),Ja=new Float32Array(9),Qa=new Float32Array(4);function Ti(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ja[r];if(s===void 0&&(s=new Float32Array(r),ja[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zr(n,e){let t=Ka[e];t===void 0&&(t=new Int32Array(e),Ka[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _p(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function vp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function xp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Mp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;Qa.set(i),n.uniformMatrix2fv(this.addr,!1,Qa),Mt(t,i)}}function Sp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;Ja.set(i),n.uniformMatrix3fv(this.addr,!1,Ja),Mt(t,i)}}function Ep(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;$a.set(i),n.uniformMatrix4fv(this.addr,!1,$a),Mt(t,i)}}function Tp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function bp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function wp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Ap(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Cp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function Rp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function Pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function Lp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(As.compareFunction=t.isReversedDepthBuffer()?518:515,s=As):s=Fo,t.setTexture2D(e||s,r)}function Dp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Oo,r)}function Ip(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Bo,r)}function Up(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||No,r)}function Fp(n){switch(n){case 5126:return _p;case 35664:return gp;case 35665:return vp;case 35666:return xp;case 35674:return Mp;case 35675:return Sp;case 35676:return Ep;case 5124:case 35670:return Tp;case 35667:case 35671:return yp;case 35668:case 35672:return bp;case 35669:case 35673:return wp;case 5125:return Ap;case 36294:return Cp;case 36295:return Rp;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Up}}function Np(n,e){n.uniform1fv(this.addr,e)}function Op(n,e){const t=Ti(e,this.size,2);n.uniform2fv(this.addr,t)}function Bp(n,e){const t=Ti(e,this.size,3);n.uniform3fv(this.addr,t)}function zp(n,e){const t=Ti(e,this.size,4);n.uniform4fv(this.addr,t)}function Gp(n,e){const t=Ti(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Hp(n,e){const t=Ti(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Vp(n,e){const t=Ti(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kp(n,e){n.uniform1iv(this.addr,e)}function Wp(n,e){n.uniform2iv(this.addr,e)}function Xp(n,e){n.uniform3iv(this.addr,e)}function qp(n,e){n.uniform4iv(this.addr,e)}function Yp(n,e){n.uniform1uiv(this.addr,e)}function Zp(n,e){n.uniform2uiv(this.addr,e)}function jp(n,e){n.uniform3uiv(this.addr,e)}function Kp(n,e){n.uniform4uiv(this.addr,e)}function $p(n,e,t){const i=this.cache,r=e.length,s=zr(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=As:a=Fo;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Jp(n,e,t){const i=this.cache,r=e.length,s=zr(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Oo,s[a])}function Qp(n,e,t){const i=this.cache,r=e.length,s=zr(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Bo,s[a])}function em(n,e,t){const i=this.cache,r=e.length,s=zr(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||No,s[a])}function tm(n){switch(n){case 5126:return Np;case 35664:return Op;case 35665:return Bp;case 35666:return zp;case 35674:return Gp;case 35675:return Hp;case 35676:return Vp;case 5124:case 35670:return kp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return qp;case 5125:return Yp;case 36294:return Zp;case 36295:return jp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return em}}class nm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fp(t.type)}}class im{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tm(t.type)}}class rm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Es=/(\w+)(\])?(\[|\.)?/g;function eo(n,e){n.seq.push(e),n.map[e.id]=e}function sm(n,e,t){const i=n.name,r=i.length;for(Es.lastIndex=0;;){const s=Es.exec(i),a=Es.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){eo(t,l===void 0?new nm(o,n,e):new im(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new rm(o),eo(t,u)),t=u}}}class br{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);sm(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function to(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const am=37297;let om=0;function lm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const no=new Re;function cm(n){ze._getMatrix(no,ze.workingColorSpace,n);const e=`mat3( ${no.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(n)){case Cr:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function io(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+lm(n.getShaderSource(e),o)}else return s}function hm(n,e){const t=cm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const dm={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function um(n,e){const t=dm[e];return t===void 0?(be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Er=new N;function fm(){ze.getLuminanceCoefficients(Er);const n=Er.x.toFixed(4),e=Er.y.toFixed(4),t=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Li).join(`
`)}function mm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _m(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Li(n){return n!==""}function ro(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function so(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cs(n){return n.replace(gm,xm)}const vm=new Map;function xm(n,e){let t=Ue[e];if(t===void 0){const i=vm.get(e);if(i!==void 0)t=Ue[i],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cs(t)}const Mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ao(n){return n.replace(Mm,Sm)}function Sm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function oo(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Em={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function Tm(n){return Em[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ym={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function bm(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ym[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const wm={302:"ENVMAP_MODE_REFRACTION"};function Am(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":wm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Cm={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function Rm(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Cm[n.combine]||"ENVMAP_BLENDING_NONE"}function Pm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Lm(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Tm(t),l=bm(t),d=Am(t),u=Rm(t),h=Pm(t),m=pm(t),x=mm(s),E=r.createProgram();let p,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Li).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Li).join(`
`),f.length>0&&(f+=`
`)):(p=[oo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),f=[oo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ue.tonemapping_pars_fragment:"",t.toneMapping!==0?um("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,hm("linearToOutputTexel",t.outputColorSpace),fm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),a=Cs(a),a=ro(a,t),a=so(a,t),o=Cs(o),o=ro(o,t),o=so(o,t),a=ao(a),o=ao(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===_a?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=S+p+a,T=S+f+o,P=to(r,r.VERTEX_SHADER,b),y=to(r,r.FRAGMENT_SHADER,T);r.attachShader(E,P),r.attachShader(E,y),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function R(A){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(E)||"",X=r.getShaderInfoLog(P)||"",j=r.getShaderInfoLog(y)||"",I=G.trim(),V=X.trim(),z=j.trim();let J=!0,Q=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,P,y);else{const ce=io(r,P,"vertex"),ve=io(r,y,"fragment");He("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+ce+`
`+ve)}else I!==""?be("WebGLProgram: Program Info Log:",I):(V===""||z==="")&&(Q=!1);Q&&(A.diagnostics={runnable:J,programLog:I,vertexShader:{log:V,prefix:p},fragmentShader:{log:z,prefix:f}})}r.deleteShader(P),r.deleteShader(y),v=new br(r,E),w=_m(r,E)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(E,am)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=om++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=y,this}let Dm=0;class Im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Um(e),t.set(e,i)),i}}class Um{constructor(e){this.id=Dm++,this.code=e,this.usedTimes=0}}function Fm(n){return n===1030||n===37490||n===36285}function Nm(n,e,t,i,r,s){const a=new Hs,o=new Im,c=new Set,l=[],d=new Map,u=i.logarithmicDepthBuffer;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function E(v,w,F,A,G,X){const j=A.fog,I=G.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,J=e.get(v.envMap||V,z),Q=J&&J.mapping===306?J.image.height:null,ce=m[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&be("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ve=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Ee=ve!==void 0?ve.length:0;let Ve=0;I.morphAttributes.position!==void 0&&(Ve=1),I.morphAttributes.normal!==void 0&&(Ve=2),I.morphAttributes.color!==void 0&&(Ve=3);let Ke,De,Z,ue;if(ce){const Pe=cn[ce];Ke=Pe.vertexShader,De=Pe.fragmentShader}else Ke=v.vertexShader,De=v.fragmentShader,o.update(v),Z=o.getVertexShaderID(v),ue=o.getFragmentShaderID(v);const ie=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Ce=G.isInstancedMesh===!0,we=G.isBatchedMesh===!0,at=!!v.map,Oe=!!v.matcap,$e=!!J,st=!!v.aoMap,Ne=!!v.lightMap,gt=!!v.bumpMap,ot=!!v.normalMap,Ut=!!v.displacementMap,L=!!v.emissiveMap,vt=!!v.metalnessMap,Be=!!v.roughnessMap,it=v.anisotropy>0,oe=v.clearcoat>0,lt=v.dispersion>0,M=v.iridescence>0,_=v.sheen>0,U=v.transmission>0,q=it&&!!v.anisotropyMap,$=oe&&!!v.clearcoatMap,ee=oe&&!!v.clearcoatNormalMap,ae=oe&&!!v.clearcoatRoughnessMap,k=M&&!!v.iridescenceMap,Y=M&&!!v.iridescenceThicknessMap,fe=_&&!!v.sheenColorMap,_e=_&&!!v.sheenRoughnessMap,re=!!v.specularMap,te=!!v.specularColorMap,Ae=!!v.specularIntensityMap,Ie=U&&!!v.transmissionMap,We=U&&!!v.thicknessMap,C=!!v.gradientMap,ne=!!v.alphaMap,W=v.alphaTest>0,pe=!!v.alphaHash,se=!!v.extensions;let K=0;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(K=n.toneMapping);const Me={shaderID:ce,shaderType:v.type,shaderName:v.name,vertexShader:Ke,fragmentShader:De,defines:v.defines,customVertexShaderID:Z,customFragmentShaderID:ue,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:we,batchingColor:we&&G._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&G.instanceColor!==null,instancingMorph:Ce&&G.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:at,matcap:Oe,envMap:$e,envMapMode:$e&&J.mapping,envMapCubeUVHeight:Q,aoMap:st,lightMap:Ne,bumpMap:gt,normalMap:ot,displacementMap:Ut,emissiveMap:L,normalMapObjectSpace:ot&&v.normalMapType===1,normalMapTangentSpace:ot&&v.normalMapType===0,packedNormalMap:ot&&v.normalMapType===0&&Fm(v.normalMap.format),metalnessMap:vt,roughnessMap:Be,anisotropy:it,anisotropyMap:q,clearcoat:oe,clearcoatMap:$,clearcoatNormalMap:ee,clearcoatRoughnessMap:ae,dispersion:lt,iridescence:M,iridescenceMap:k,iridescenceThicknessMap:Y,sheen:_,sheenColorMap:fe,sheenRoughnessMap:_e,specularMap:re,specularColorMap:te,specularIntensityMap:Ae,transmission:U,transmissionMap:Ie,thicknessMap:We,gradientMap:C,opaque:v.transparent===!1&&v.blending===1&&v.alphaToCoverage===!1,alphaMap:ne,alphaTest:W,alphaHash:pe,combine:v.combine,mapUv:at&&x(v.map.channel),aoMapUv:st&&x(v.aoMap.channel),lightMapUv:Ne&&x(v.lightMap.channel),bumpMapUv:gt&&x(v.bumpMap.channel),normalMapUv:ot&&x(v.normalMap.channel),displacementMapUv:Ut&&x(v.displacementMap.channel),emissiveMapUv:L&&x(v.emissiveMap.channel),metalnessMapUv:vt&&x(v.metalnessMap.channel),roughnessMapUv:Be&&x(v.roughnessMap.channel),anisotropyMapUv:q&&x(v.anisotropyMap.channel),clearcoatMapUv:$&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:k&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(v.sheenRoughnessMap.channel),specularMapUv:re&&x(v.specularMap.channel),specularColorMapUv:te&&x(v.specularColorMap.channel),specularIntensityMapUv:Ae&&x(v.specularIntensityMap.channel),transmissionMapUv:Ie&&x(v.transmissionMap.channel),thicknessMapUv:We&&x(v.thicknessMap.channel),alphaMapUv:ne&&x(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ot||it),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!I.attributes.uv&&(at||ne),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&ot===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:G.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ve,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:K,decodeVideoTexture:at&&v.map.isVideoTexture===!0&&ze.getTransfer(v.map.colorSpace)===je,decodeVideoTextureEmissive:L&&v.emissiveMap.isVideoTexture===!0&&ze.getTransfer(v.emissiveMap.colorSpace)===je,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===2,flipSided:v.side===1,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)w.push(F),w.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(f(w,v),S(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function f(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function b(v){const w=m[v.type];let F;if(w){const A=cn[w];F=Qh.clone(A.uniforms)}else F=v.uniforms;return F}function T(v,w){let F=d.get(w);return F!==void 0?++F.usedTimes:(F=new Lm(n,w,v,r),l.push(F),d.set(w,F)),F}function P(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),d.delete(v.cacheKey),v.destroy()}}function y(v){o.remove(v)}function R(){o.dispose()}return{getParameters:E,getProgramCacheKey:p,getUniforms:b,acquireProgram:T,releaseProgram:P,releaseShaderCache:y,programs:l,dispose:R}}function Om(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Bm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function lo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function co(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,x,E,p,f){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:m,material:x,materialVariant:a(h),groupOrder:E,renderOrder:h.renderOrder,z:p,group:f},n[e]=S):(S.id=h.id,S.object=h,S.geometry=m,S.material=x,S.materialVariant=a(h),S.groupOrder=E,S.renderOrder=h.renderOrder,S.z=p,S.group=f),e++,S}function c(h,m,x,E,p,f){const S=o(h,m,x,E,p,f);x.transmission>0?i.push(S):x.transparent===!0?r.push(S):t.push(S)}function l(h,m,x,E,p,f){const S=o(h,m,x,E,p,f);x.transmission>0?i.unshift(S):x.transparent===!0?r.unshift(S):t.unshift(S)}function d(h,m){t.length>1&&t.sort(h||Bm),i.length>1&&i.sort(m||lo),r.length>1&&r.sort(m||lo)}function u(){for(let h=e,m=n.length;h<m;h++){const x=n[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:u,sort:d}}function zm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new co,n.set(i,[a])):r>=s.length?(a=new co,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Gm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new et};break;case"SpotLight":t={position:new N,direction:new N,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function Hm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Vm=0;function km(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Wm(n){const e=new Gm,t=Hm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,s=new pt,a=new pt;function o(l){let d=0,u=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,x=0,E=0,p=0,f=0,S=0,b=0,T=0,P=0,y=0,R=0;l.sort(km);for(let w=0,F=l.length;w<F;w++){const A=l[w],G=A.color,X=A.intensity,j=A.distance;let I=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===1030?I=A.shadow.map.texture:I=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)d+=G.r*X,u+=G.g*X,h+=G.b*X;else if(A.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(A.sh.coefficients[V],X);R++}else if(A.isDirectionalLight){const V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const z=A.shadow,J=t.get(A);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=I,i.directionalShadowMatrix[m]=A.shadow.matrix,S++}i.directional[m]=V,m++}else if(A.isSpotLight){const V=e.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(G).multiplyScalar(X),V.distance=j,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,i.spot[E]=V;const z=A.shadow;if(A.map&&(i.spotLightMap[P]=A.map,P++,z.updateMatrices(A),A.castShadow&&y++),i.spotLightMatrix[E]=z.matrix,A.castShadow){const J=t.get(A);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,i.spotShadow[E]=J,i.spotShadowMap[E]=I,T++}E++}else if(A.isRectAreaLight){const V=e.get(A);V.color.copy(G).multiplyScalar(X),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),i.rectArea[p]=V,p++}else if(A.isPointLight){const V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),V.distance=A.distance,V.decay=A.decay,A.castShadow){const z=A.shadow,J=t.get(A);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,J.shadowCameraNear=z.camera.near,J.shadowCameraFar=z.camera.far,i.pointShadow[x]=J,i.pointShadowMap[x]=I,i.pointShadowMatrix[x]=A.shadow.matrix,b++}i.point[x]=V,x++}else if(A.isHemisphereLight){const V=e.get(A);V.skyColor.copy(A.color).multiplyScalar(X),V.groundColor.copy(A.groundColor).multiplyScalar(X),i.hemi[f]=V,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const v=i.hash;(v.directionalLength!==m||v.pointLength!==x||v.spotLength!==E||v.rectAreaLength!==p||v.hemiLength!==f||v.numDirectionalShadows!==S||v.numPointShadows!==b||v.numSpotShadows!==T||v.numSpotMaps!==P||v.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=p,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=T+P-y,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=R,v.directionalLength=m,v.pointLength=x,v.spotLength=E,v.rectAreaLength=p,v.hemiLength=f,v.numDirectionalShadows=S,v.numPointShadows=b,v.numSpotShadows=T,v.numSpotMaps=P,v.numLightProbes=R,i.version=Vm++)}function c(l,d){let u=0,h=0,m=0,x=0,E=0;const p=d.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){const b=l[f];if(b.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),u++}else if(b.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const T=i.rectArea[x];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(b.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),h++}else if(b.isHemisphereLight){const T=i.hemi[E];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),E++}}}return{setup:o,setupView:c,state:i}}function ho(n){const e=new Wm(n),t=[],i=[],r=[];function s(h){u.camera=h,t.length=0,i.length=0,r.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function c(h){r.push(h)}function l(){e.setup(t)}function d(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Xm(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ho(n),e.set(r,[o])):s>=a.length?(o=new ho(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zm=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],jm=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],uo=new pt,Ri=new N,Ts=new N;function Km(n,e,t){let i=new ks;const r=new Xe,s=new Xe,a=new ft,o=new id,c=new rd,l={},d=t.maxTextureSize,u={0:1,1:0,2:2},h=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:qm,fragmentShader:Ym}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new un;x.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ht(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(y,R,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;this.type===2&&(be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const w=n.getRenderTarget(),F=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),G=n.state;G.setBlending(0),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const X=f!==this.type;X&&R.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(I=>I.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,I=y.length;j<I;j++){const V=y[j],z=V.shadow;if(z===void 0){be("WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const J=z.getFrameExtents();r.multiply(J),s.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/J.x),r.x=s.x*J.x,z.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/J.y),r.y=s.y*J.y,z.mapSize.y=s.y));const Q=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Q,z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===3){if(V.isPointLight){be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Qt(r.x,r.y,{format:1030,type:1016,minFilter:1006,magFilter:1006,generateMipmaps:!1}),z.map.texture.name=V.name+".shadowMap",z.map.depthTexture=new gi(r.x,r.y,1015),z.map.depthTexture.name=V.name+".shadowMapDepth",z.map.depthTexture.format=1026,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=1003,z.map.depthTexture.magFilter=1003}else V.isPointLight?(z.map=new Uo(r.x),z.map.depthTexture=new $h(r.x,1014)):(z.map=new Qt(r.x,r.y),z.map.depthTexture=new gi(r.x,r.y,1014)),z.map.depthTexture.name=V.name+".shadowMap",z.map.depthTexture.format=1026,this.type===1?(z.map.depthTexture.compareFunction=Q?518:515,z.map.depthTexture.minFilter=1006,z.map.depthTexture.magFilter=1006):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=1003,z.map.depthTexture.magFilter=1003);z.camera.updateProjectionMatrix()}const ce=z.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<ce;ve++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(z.map),n.clear());const Ee=z.getViewport(ve);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),G.viewport(a)}if(V.isPointLight){const Ee=z.camera,Ve=z.matrix,Ke=V.distance||Ee.far;Ke!==Ee.far&&(Ee.far=Ke,Ee.updateProjectionMatrix()),Ri.setFromMatrixPosition(V.matrixWorld),Ee.position.copy(Ri),Ts.copy(Ee.position),Ts.add(Zm[ve]),Ee.up.copy(jm[ve]),Ee.lookAt(Ts),Ee.updateMatrixWorld(),Ve.makeTranslation(-Ri.x,-Ri.y,-Ri.z),uo.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),z._frustum.setFromProjectionMatrix(uo,Ee.coordinateSystem,Ee.reversedDepth)}else z.updateMatrices(V);i=z.getFrustum(),T(R,v,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===3&&S(z,v),z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(w,F,A)};function S(y,R){const v=e.update(E);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Qt(r.x,r.y,{format:1030,type:1016})),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(R,null,v,h,E,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(R,null,v,m,E,null)}function b(y,R,v,w){let F=null;const A=v.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(A!==void 0)F=A;else if(F=v.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const G=F.uuid,X=R.uuid;let j=l[G];j===void 0&&(j={},l[G]=j);let I=j[X];I===void 0&&(I=F.clone(),j[X]=I,R.addEventListener("dispose",P)),F=I}if(F.visible=R.visible,F.wireframe=R.wireframe,w===3?F.side=R.shadowSide!==null?R.shadowSide:R.side:F.side=R.shadowSide!==null?R.shadowSide:u[R.side],F.alphaMap=R.alphaMap,F.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,F.map=R.map,F.clipShadows=R.clipShadows,F.clippingPlanes=R.clippingPlanes,F.clipIntersection=R.clipIntersection,F.displacementMap=R.displacementMap,F.displacementScale=R.displacementScale,F.displacementBias=R.displacementBias,F.wireframeLinewidth=R.wireframeLinewidth,F.linewidth=R.linewidth,v.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const G=n.properties.get(F);G.light=v}return F}function T(y,R,v,w,F){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&F===3)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,y.matrixWorld);const X=e.update(y),j=y.material;if(Array.isArray(j)){const I=X.groups;for(let V=0,z=I.length;V<z;V++){const J=I[V],Q=j[J.materialIndex];if(Q&&Q.visible){const ce=b(y,Q,w,F);y.onBeforeShadow(n,y,R,v,X,ce,J),n.renderBufferDirect(v,null,X,ce,y,J),y.onAfterShadow(n,y,R,v,X,ce,J)}}}else if(j.visible){const I=b(y,j,w,F);y.onBeforeShadow(n,y,R,v,X,I,null),n.renderBufferDirect(v,null,X,I,y,null),y.onAfterShadow(n,y,R,v,X,I,null)}}const G=y.children;for(let X=0,j=G.length;X<j;X++)T(G[X],R,v,w,F)}function P(y){y.target.removeEventListener("dispose",P);for(const v in l){const w=l[v],F=y.target.uuid;F in w&&(w[F].dispose(),delete w[F])}}}function $m(n,e){function t(){let C=!1;const ne=new ft;let W=null;const pe=new ft(0,0,0,0);return{setMask:function(se){W!==se&&!C&&(n.colorMask(se,se,se,se),W=se)},setLocked:function(se){C=se},setClear:function(se,K,Me,Pe,ht){ht===!0&&(se*=Pe,K*=Pe,Me*=Pe),ne.set(se,K,Me,Pe),pe.equals(ne)===!1&&(n.clearColor(se,K,Me,Pe),pe.copy(ne))},reset:function(){C=!1,W=null,pe.set(-1,0,0,0)}}}function i(){let C=!1,ne=!1,W=null,pe=null,se=null;return{setReversed:function(K){if(ne!==K){const Me=e.get("EXT_clip_control");K?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ne=K;const Pe=se;se=null,this.setClear(Pe)}},getReversed:function(){return ne},setTest:function(K){K?ie(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(K){W!==K&&!C&&(n.depthMask(K),W=K)},setFunc:function(K){if(ne&&(K=uh[K]),pe!==K){switch(K){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=K}},setLocked:function(K){C=K},setClear:function(K){se!==K&&(se=K,ne&&(K=1-K),n.clearDepth(K))},reset:function(){C=!1,W=null,pe=null,se=null,ne=!1}}}function r(){let C=!1,ne=null,W=null,pe=null,se=null,K=null,Me=null,Pe=null,ht=null;return{setTest:function(Je){C||(Je?ie(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(Je){ne!==Je&&!C&&(n.stencilMask(Je),ne=Je)},setFunc:function(Je,fn,nn){(W!==Je||pe!==fn||se!==nn)&&(n.stencilFunc(Je,fn,nn),W=Je,pe=fn,se=nn)},setOp:function(Je,fn,nn){(K!==Je||Me!==fn||Pe!==nn)&&(n.stencilOp(Je,fn,nn),K=Je,Me=fn,Pe=nn)},setLocked:function(Je){C=Je},setClear:function(Je){ht!==Je&&(n.clearStencil(Je),ht=Je)},reset:function(){C=!1,ne=null,W=null,pe=null,se=null,K=null,Me=null,Pe=null,ht=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let d={},u={},h={},m=new WeakMap,x=[],E=null,p=!1,f=null,S=null,b=null,T=null,P=null,y=null,R=null,v=new et(0,0,0),w=0,F=!1,A=null,G=null,X=null,j=null,I=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=J>=2);let ce=null,ve={};const Ee=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),Ke=new ft().fromArray(Ee),De=new ft().fromArray(Ve);function Z(C,ne,W,pe){const se=new Uint8Array(4),K=n.createTexture();n.bindTexture(C,K),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<W;Me++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(ne+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return K}const ue={};ue[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(3),gt(!1),ot(1),ie(n.CULL_FACE),st(0);function ie(C){d[C]!==!0&&(n.enable(C),d[C]=!0)}function ye(C){d[C]!==!1&&(n.disable(C),d[C]=!1)}function Ce(C,ne){return h[C]!==ne?(n.bindFramebuffer(C,ne),h[C]=ne,C===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ne),C===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function we(C,ne){let W=x,pe=!1;if(C){W=m.get(ne),W===void 0&&(W=[],m.set(ne,W));const se=C.textures;if(W.length!==se.length||W[0]!==n.COLOR_ATTACHMENT0){for(let K=0,Me=se.length;K<Me;K++)W[K]=n.COLOR_ATTACHMENT0+K;W.length=se.length,pe=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,pe=!0);pe&&n.drawBuffers(W)}function at(C){return E!==C?(n.useProgram(C),E=C,!0):!1}const Oe={100:n.FUNC_ADD,101:n.FUNC_SUBTRACT,102:n.FUNC_REVERSE_SUBTRACT};Oe[103]=n.MIN,Oe[104]=n.MAX;const $e={200:n.ZERO,201:n.ONE,202:n.SRC_COLOR,204:n.SRC_ALPHA,210:n.SRC_ALPHA_SATURATE,208:n.DST_COLOR,206:n.DST_ALPHA,203:n.ONE_MINUS_SRC_COLOR,205:n.ONE_MINUS_SRC_ALPHA,209:n.ONE_MINUS_DST_COLOR,207:n.ONE_MINUS_DST_ALPHA,211:n.CONSTANT_COLOR,212:n.ONE_MINUS_CONSTANT_COLOR,213:n.CONSTANT_ALPHA,214:n.ONE_MINUS_CONSTANT_ALPHA};function st(C,ne,W,pe,se,K,Me,Pe,ht,Je){if(C===0){p===!0&&(ye(n.BLEND),p=!1);return}if(p===!1&&(ie(n.BLEND),p=!0),C!==5){if(C!==f||Je!==F){if((S!==100||P!==100)&&(n.blendEquation(n.FUNC_ADD),S=100,P=100),Je)switch(C){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:He("WebGLState: Invalid blending: ",C);break}else switch(C){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case 3:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",C);break}b=null,T=null,y=null,R=null,v.set(0,0,0),w=0,f=C,F=Je}return}se=se||ne,K=K||W,Me=Me||pe,(ne!==S||se!==P)&&(n.blendEquationSeparate(Oe[ne],Oe[se]),S=ne,P=se),(W!==b||pe!==T||K!==y||Me!==R)&&(n.blendFuncSeparate($e[W],$e[pe],$e[K],$e[Me]),b=W,T=pe,y=K,R=Me),(Pe.equals(v)===!1||ht!==w)&&(n.blendColor(Pe.r,Pe.g,Pe.b,ht),v.copy(Pe),w=ht),f=C,F=!1}function Ne(C,ne){C.side===2?ye(n.CULL_FACE):ie(n.CULL_FACE);let W=C.side===1;ne&&(W=!W),gt(W),C.blending===1&&C.transparent===!1?st(0):st(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const pe=C.stencilWrite;o.setTest(pe),pe&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),L(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function gt(C){A!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),A=C)}function ot(C){C!==0?(ie(n.CULL_FACE),C!==G&&(C===1?n.cullFace(n.BACK):C===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),G=C}function Ut(C){C!==X&&(z&&n.lineWidth(C),X=C)}function L(C,ne,W){C?(ie(n.POLYGON_OFFSET_FILL),(j!==ne||I!==W)&&(j=ne,I=W,a.getReversed()&&(ne=-ne),n.polygonOffset(ne,W))):ye(n.POLYGON_OFFSET_FILL)}function vt(C){C?ie(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function Be(C){C===void 0&&(C=n.TEXTURE0+V-1),ce!==C&&(n.activeTexture(C),ce=C)}function it(C,ne,W){W===void 0&&(ce===null?W=n.TEXTURE0+V-1:W=ce);let pe=ve[W];pe===void 0&&(pe={type:void 0,texture:void 0},ve[W]=pe),(pe.type!==C||pe.texture!==ne)&&(ce!==W&&(n.activeTexture(W),ce=W),n.bindTexture(C,ne||ue[C]),pe.type=C,pe.texture=ne)}function oe(){const C=ve[ce];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function lt(){try{n.compressedTexImage2D(...arguments)}catch(C){He("WebGLState:",C)}}function M(){try{n.compressedTexImage3D(...arguments)}catch(C){He("WebGLState:",C)}}function _(){try{n.texSubImage2D(...arguments)}catch(C){He("WebGLState:",C)}}function U(){try{n.texSubImage3D(...arguments)}catch(C){He("WebGLState:",C)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(C){He("WebGLState:",C)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(C){He("WebGLState:",C)}}function ee(){try{n.texStorage2D(...arguments)}catch(C){He("WebGLState:",C)}}function ae(){try{n.texStorage3D(...arguments)}catch(C){He("WebGLState:",C)}}function k(){try{n.texImage2D(...arguments)}catch(C){He("WebGLState:",C)}}function Y(){try{n.texImage3D(...arguments)}catch(C){He("WebGLState:",C)}}function fe(C){return u[C]!==void 0?u[C]:n.getParameter(C)}function _e(C,ne){u[C]!==ne&&(n.pixelStorei(C,ne),u[C]=ne)}function re(C){Ke.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),Ke.copy(C))}function te(C){De.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),De.copy(C))}function Ae(C,ne){let W=l.get(ne);W===void 0&&(W=new WeakMap,l.set(ne,W));let pe=W.get(C);pe===void 0&&(pe=n.getUniformBlockIndex(ne,C.name),W.set(C,pe))}function Ie(C,ne){const pe=l.get(ne).get(C);c.get(ne)!==pe&&(n.uniformBlockBinding(ne,pe,C.__bindingPointIndex),c.set(ne,pe))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},u={},ce=null,ve={},h={},m=new WeakMap,x=[],E=null,p=!1,f=null,S=null,b=null,T=null,P=null,y=null,R=null,v=new et(0,0,0),w=0,F=!1,A=null,G=null,X=null,j=null,I=null,Ke.set(0,0,n.canvas.width,n.canvas.height),De.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:ye,bindFramebuffer:Ce,drawBuffers:we,useProgram:at,setBlending:st,setMaterial:Ne,setFlipSided:gt,setCullFace:ot,setLineWidth:Ut,setPolygonOffset:L,setScissorTest:vt,activeTexture:Be,bindTexture:it,unbindTexture:oe,compressedTexImage2D:lt,compressedTexImage3D:M,texImage2D:k,texImage3D:Y,pixelStorei:_e,getParameter:fe,updateUBOMapping:Ae,uniformBlockBinding:Ie,texStorage2D:ee,texStorage3D:ae,texSubImage2D:_,texSubImage3D:U,compressedTexSubImage2D:q,compressedTexSubImage3D:$,scissor:re,viewport:te,reset:We}}function Jm(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,d=new WeakMap,u=new Set;let h;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(M,_){return x?new OffscreenCanvas(M,_):qi("canvas")}function p(M,_,U){let q=1;const $=lt(M);if(($.width>U||$.height>U)&&(q=U/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const ee=Math.floor(q*$.width),ae=Math.floor(q*$.height);h===void 0&&(h=E(ee,ae));const k=_?E(ee,ae):h;return k.width=ee,k.height=ae,k.getContext("2d").drawImage(M,0,0,ee,ae),be("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ee+"x"+ae+")."),k}else return"data"in M&&be("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),M;return M}function f(M){return M.generateMipmaps}function S(M){n.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(M,_,U,q,$,ee=!1){if(M!==null){if(n[M]!==void 0)return n[M];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ae;q&&(ae=e.get("EXT_texture_norm16"),ae||be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=_;if(_===n.RED&&(U===n.FLOAT&&(k=n.R32F),U===n.HALF_FLOAT&&(k=n.R16F),U===n.UNSIGNED_BYTE&&(k=n.R8),U===n.UNSIGNED_SHORT&&ae&&(k=ae.R16_EXT),U===n.SHORT&&ae&&(k=ae.R16_SNORM_EXT)),_===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(k=n.R8UI),U===n.UNSIGNED_SHORT&&(k=n.R16UI),U===n.UNSIGNED_INT&&(k=n.R32UI),U===n.BYTE&&(k=n.R8I),U===n.SHORT&&(k=n.R16I),U===n.INT&&(k=n.R32I)),_===n.RG&&(U===n.FLOAT&&(k=n.RG32F),U===n.HALF_FLOAT&&(k=n.RG16F),U===n.UNSIGNED_BYTE&&(k=n.RG8),U===n.UNSIGNED_SHORT&&ae&&(k=ae.RG16_EXT),U===n.SHORT&&ae&&(k=ae.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(k=n.RG8UI),U===n.UNSIGNED_SHORT&&(k=n.RG16UI),U===n.UNSIGNED_INT&&(k=n.RG32UI),U===n.BYTE&&(k=n.RG8I),U===n.SHORT&&(k=n.RG16I),U===n.INT&&(k=n.RG32I)),_===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(k=n.RGB8UI),U===n.UNSIGNED_SHORT&&(k=n.RGB16UI),U===n.UNSIGNED_INT&&(k=n.RGB32UI),U===n.BYTE&&(k=n.RGB8I),U===n.SHORT&&(k=n.RGB16I),U===n.INT&&(k=n.RGB32I)),_===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),U===n.UNSIGNED_INT&&(k=n.RGBA32UI),U===n.BYTE&&(k=n.RGBA8I),U===n.SHORT&&(k=n.RGBA16I),U===n.INT&&(k=n.RGBA32I)),_===n.RGB&&(U===n.UNSIGNED_SHORT&&ae&&(k=ae.RGB16_EXT),U===n.SHORT&&ae&&(k=ae.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),_===n.RGBA){const Y=ee?Cr:ze.getTransfer($);U===n.FLOAT&&(k=n.RGBA32F),U===n.HALF_FLOAT&&(k=n.RGBA16F),U===n.UNSIGNED_BYTE&&(k=Y===je?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&ae&&(k=ae.RGBA16_EXT),U===n.SHORT&&ae&&(k=ae.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function P(M,_){let U;return M?_===null||_===1014||_===1020?U=n.DEPTH24_STENCIL8:_===1015?U=n.DEPTH32F_STENCIL8:_===1012&&(U=n.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===1014||_===1020?U=n.DEPTH_COMPONENT24:_===1015?U=n.DEPTH_COMPONENT32F:_===1012&&(U=n.DEPTH_COMPONENT16),U}function y(M,_){return f(M)===!0||M.isFramebufferTexture&&M.minFilter!==1003&&M.minFilter!==1006?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function R(M){const _=M.target;_.removeEventListener("dispose",R),w(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&u.delete(_)}function v(M){const _=M.target;_.removeEventListener("dispose",v),A(_)}function w(M){const _=i.get(M);if(_.__webglInit===void 0)return;const U=M.source,q=m.get(U);if(q){const $=q[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&F(M),Object.keys(q).length===0&&m.delete(U)}i.remove(M)}function F(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const U=M.source,q=m.get(U);delete q[_.__cacheKey],a.memory.textures--}function A(M){const _=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let $=0;$<_.__webglFramebuffer[q].length;$++)n.deleteFramebuffer(_.__webglFramebuffer[q][$]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=M.textures;for(let q=0,$=U.length;q<$;q++){const ee=i.get(U[q]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(U[q])}i.remove(M)}let G=0;function X(){G=0}function j(){return G}function I(M){G=M}function V(){const M=G;return M>=r.maxTextures&&be("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),G+=1,M}function z(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function J(M,_){const U=i.get(M);if(M.isVideoTexture&&it(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&U.__version!==M.version){const q=M.image;if(q===null)be("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)be("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(U,M,_);return}}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+_)}function Q(M,_){const U=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){ye(U,M,_);return}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+_)}function ce(M,_){const U=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){ye(U,M,_);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+_)}function ve(M,_){const U=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&U.__version!==M.version){Ce(U,M,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+_)}const Ee={1e3:n.REPEAT,1001:n.CLAMP_TO_EDGE,1002:n.MIRRORED_REPEAT},Ve={1003:n.NEAREST,1004:n.NEAREST_MIPMAP_NEAREST,1005:n.NEAREST_MIPMAP_LINEAR,1006:n.LINEAR,1007:n.LINEAR_MIPMAP_NEAREST,1008:n.LINEAR_MIPMAP_LINEAR},Ke={512:n.NEVER,519:n.ALWAYS,513:n.LESS,515:n.LEQUAL,514:n.EQUAL,518:n.GEQUAL,516:n.GREATER,517:n.NOTEQUAL};function De(M,_){if(_.type===1015&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===1006||_.magFilter===1007||_.magFilter===1005||_.magFilter===1008||_.minFilter===1006||_.minFilter===1007||_.minFilter===1005||_.minFilter===1008)&&be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,Ee[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,Ee[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,Ee[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Ve[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Ve[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Ke[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===1003||_.minFilter!==1005&&_.minFilter!==1008||_.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Z(M,_){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",R));const q=_.source;let $=m.get(q);$===void 0&&($={},m.set(q,$));const ee=z(_);if(ee!==M.__cacheKey){$[ee]===void 0&&($[ee]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),$[ee].usedTimes++;const ae=$[M.__cacheKey];ae!==void 0&&($[M.__cacheKey].usedTimes--,ae.usedTimes===0&&F(_)),M.__cacheKey=ee,M.__webglTexture=$[ee].texture}return U}function ue(M,_,U){return Math.floor(Math.floor(M/U)/_)}function ie(M,_,U,q){const ee=M.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,U,q,_.data);else{ee.sort((_e,re)=>_e.start-re.start);let ae=0;for(let _e=1;_e<ee.length;_e++){const re=ee[ae],te=ee[_e],Ae=re.start+re.count,Ie=ue(te.start,_.width,4),We=ue(re.start,_.width,4);te.start<=Ae+1&&Ie===We&&ue(te.start+te.count-1,_.width,4)===Ie?re.count=Math.max(re.count,te.start+te.count-re.start):(++ae,ee[ae]=te)}ee.length=ae+1;const k=t.getParameter(n.UNPACK_ROW_LENGTH),Y=t.getParameter(n.UNPACK_SKIP_PIXELS),fe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let _e=0,re=ee.length;_e<re;_e++){const te=ee[_e],Ae=Math.floor(te.start/4),Ie=Math.ceil(te.count/4),We=Ae%_.width,C=Math.floor(Ae/_.width),ne=Ie,W=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,We),t.pixelStorei(n.UNPACK_SKIP_ROWS,C),t.texSubImage2D(n.TEXTURE_2D,0,We,C,ne,W,U,q,_.data)}M.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,k),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(n.UNPACK_SKIP_ROWS,fe)}}function ye(M,_,U){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);const $=Z(M,_),ee=_.source;t.bindTexture(q,M.__webglTexture,n.TEXTURE0+U);const ae=i.get(ee);if(ee.version!==ae.__version||$===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const W=ze.getPrimaries(ze.workingColorSpace),pe=_.colorSpace===""?null:ze.getPrimaries(_.colorSpace),se=_.colorSpace===""||W===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let Y=p(_.image,!1,r.maxTextureSize);Y=oe(_,Y);const fe=s.convert(_.format,_.colorSpace),_e=s.convert(_.type);let re=T(_.internalFormat,fe,_e,_.normalized,_.colorSpace,_.isVideoTexture);De(q,_);let te;const Ae=_.mipmaps,Ie=_.isVideoTexture!==!0,We=ae.__version===void 0||$===!0,C=ee.dataReady,ne=y(_,Y);if(_.isDepthTexture)re=P(_.format===1027,_.type),We&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,re,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,re,Y.width,Y.height,0,fe,_e,null));else if(_.isDataTexture)if(Ae.length>0){Ie&&We&&t.texStorage2D(n.TEXTURE_2D,ne,re,Ae[0].width,Ae[0].height);for(let W=0,pe=Ae.length;W<pe;W++)te=Ae[W],Ie?C&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,te.width,te.height,fe,_e,te.data):t.texImage2D(n.TEXTURE_2D,W,re,te.width,te.height,0,fe,_e,te.data);_.generateMipmaps=!1}else Ie?(We&&t.texStorage2D(n.TEXTURE_2D,ne,re,Y.width,Y.height),C&&ie(_,Y,fe,_e)):t.texImage2D(n.TEXTURE_2D,0,re,Y.width,Y.height,0,fe,_e,Y.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ie&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,re,Ae[0].width,Ae[0].height,Y.depth);for(let W=0,pe=Ae.length;W<pe;W++)if(te=Ae[W],_.format!==1023)if(fe!==null)if(Ie){if(C)if(_.layerUpdates.size>0){const se=Va(te.width,te.height,_.format,_.type);for(const K of _.layerUpdates){const Me=te.data.subarray(K*se/te.data.BYTES_PER_ELEMENT,(K+1)*se/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,K,te.width,te.height,1,fe,Me)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,te.width,te.height,Y.depth,fe,te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,re,te.width,te.height,Y.depth,0,te.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?C&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,te.width,te.height,Y.depth,fe,_e,te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,re,te.width,te.height,Y.depth,0,fe,_e,te.data)}else{Ie&&We&&t.texStorage2D(n.TEXTURE_2D,ne,re,Ae[0].width,Ae[0].height);for(let W=0,pe=Ae.length;W<pe;W++)te=Ae[W],_.format!==1023?fe!==null?Ie?C&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,te.width,te.height,fe,te.data):t.compressedTexImage2D(n.TEXTURE_2D,W,re,te.width,te.height,0,te.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?C&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,te.width,te.height,fe,_e,te.data):t.texImage2D(n.TEXTURE_2D,W,re,te.width,te.height,0,fe,_e,te.data)}else if(_.isDataArrayTexture)if(Ie){if(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,re,Y.width,Y.height,Y.depth),C)if(_.layerUpdates.size>0){const W=Va(Y.width,Y.height,_.format,_.type);for(const pe of _.layerUpdates){const se=Y.data.subarray(pe*W/Y.data.BYTES_PER_ELEMENT,(pe+1)*W/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,Y.width,Y.height,1,fe,_e,se)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,fe,_e,Y.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,re,Y.width,Y.height,Y.depth,0,fe,_e,Y.data);else if(_.isData3DTexture)Ie?(We&&t.texStorage3D(n.TEXTURE_3D,ne,re,Y.width,Y.height,Y.depth),C&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,fe,_e,Y.data)):t.texImage3D(n.TEXTURE_3D,0,re,Y.width,Y.height,Y.depth,0,fe,_e,Y.data);else if(_.isFramebufferTexture){if(We)if(Ie)t.texStorage2D(n.TEXTURE_2D,ne,re,Y.width,Y.height);else{let W=Y.width,pe=Y.height;for(let se=0;se<ne;se++)t.texImage2D(n.TEXTURE_2D,se,re,W,pe,0,fe,_e,null),W>>=1,pe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const W=n.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),Y.parentNode!==W){W.appendChild(Y),u.add(_),W.onpaint=Pe=>{const ht=Pe.changedElements;for(const Je of u)ht.includes(Je.image)&&(Je.needsUpdate=!0)},W.requestPaint();return}const pe=0,se=n.RGBA,K=n.RGBA,Me=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,pe,se,K,Me,Y),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ie&&We){const W=lt(Ae[0]);t.texStorage2D(n.TEXTURE_2D,ne,re,W.width,W.height)}for(let W=0,pe=Ae.length;W<pe;W++)te=Ae[W],Ie?C&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,fe,_e,te):t.texImage2D(n.TEXTURE_2D,W,re,fe,_e,te);_.generateMipmaps=!1}else if(Ie){if(We){const W=lt(Y);t.texStorage2D(n.TEXTURE_2D,ne,re,W.width,W.height)}C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,_e,Y)}else t.texImage2D(n.TEXTURE_2D,0,re,fe,_e,Y);f(_)&&S(q),ae.__version=ee.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Ce(M,_,U){if(_.image.length!==6)return;const q=Z(M,_),$=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+U);const ee=i.get($);if($.version!==ee.__version||q===!0){t.activeTexture(n.TEXTURE0+U);const ae=ze.getPrimaries(ze.workingColorSpace),k=_.colorSpace===""?null:ze.getPrimaries(_.colorSpace),Y=_.colorSpace===""||ae===k?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const fe=_.isCompressedTexture||_.image[0].isCompressedTexture,_e=_.image[0]&&_.image[0].isDataTexture,re=[];for(let K=0;K<6;K++)!fe&&!_e?re[K]=p(_.image[K],!0,r.maxCubemapSize):re[K]=_e?_.image[K].image:_.image[K],re[K]=oe(_,re[K]);const te=re[0],Ae=s.convert(_.format,_.colorSpace),Ie=s.convert(_.type),We=T(_.internalFormat,Ae,Ie,_.normalized,_.colorSpace),C=_.isVideoTexture!==!0,ne=ee.__version===void 0||q===!0,W=$.dataReady;let pe=y(_,te);De(n.TEXTURE_CUBE_MAP,_);let se;if(fe){C&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,We,te.width,te.height);for(let K=0;K<6;K++){se=re[K].mipmaps;for(let Me=0;Me<se.length;Me++){const Pe=se[Me];_.format!==1023?Ae!==null?C?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,0,0,Pe.width,Pe.height,Ae,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,We,Pe.width,Pe.height,0,Pe.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,0,0,Pe.width,Pe.height,Ae,Ie,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,We,Pe.width,Pe.height,0,Ae,Ie,Pe.data)}}}else{if(se=_.mipmaps,C&&ne){se.length>0&&pe++;const K=lt(re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,We,K.width,K.height)}for(let K=0;K<6;K++)if(_e){C?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,re[K].width,re[K].height,Ae,Ie,re[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,re[K].width,re[K].height,0,Ae,Ie,re[K].data);for(let Me=0;Me<se.length;Me++){const ht=se[Me].image[K].image;C?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,0,0,ht.width,ht.height,Ae,Ie,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,We,ht.width,ht.height,0,Ae,Ie,ht.data)}}else{C?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ae,Ie,re[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,Ae,Ie,re[K]);for(let Me=0;Me<se.length;Me++){const Pe=se[Me];C?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,0,0,Ae,Ie,Pe.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,We,Ae,Ie,Pe.image[K])}}}f(_)&&S(n.TEXTURE_CUBE_MAP),ee.__version=$.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function we(M,_,U,q,$,ee){const ae=s.convert(U.format,U.colorSpace),k=s.convert(U.type),Y=T(U.internalFormat,ae,k,U.normalized,U.colorSpace),fe=i.get(_),_e=i.get(U);if(_e.__renderTarget=_,!fe.__hasExternalTextures){const re=Math.max(1,_.width>>ee),te=Math.max(1,_.height>>ee);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,ee,Y,re,te,_.depth,0,ae,k,null):t.texImage2D($,ee,Y,re,te,0,ae,k,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Be(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,$,_e.__webglTexture,0,vt(_)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,$,_e.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(M,_,U){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer){const q=_.depthTexture,$=q&&q.isDepthTexture?q.type:null,ee=P(_.stencilBuffer,$),ae=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Be(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(_),ee,_.width,_.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(_),ee,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ee,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,M)}else{const q=_.textures;for(let $=0;$<q.length;$++){const ee=q[$],ae=s.convert(ee.format,ee.colorSpace),k=s.convert(ee.type),Y=T(ee.internalFormat,ae,k,ee.normalized,ee.colorSpace);Be(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(_),Y,_.width,_.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(_),Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(M,_,U){const q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(_.depthTexture);if($.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),De(n.TEXTURE_CUBE_MAP,_.depthTexture);const fe=s.convert(_.depthTexture.format),_e=s.convert(_.depthTexture.type);let re;_.depthTexture.format===1026?re=n.DEPTH_COMPONENT24:_.depthTexture.format===1027&&(re=n.DEPTH24_STENCIL8);for(let te=0;te<6;te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,re,_.width,_.height,0,fe,_e,null)}}else J(_.depthTexture,0);const ee=$.__webglTexture,ae=vt(_),k=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,Y=_.depthTexture.format===1027?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===1026)Be(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,k,ee,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,Y,k,ee,0);else if(_.depthTexture.format===1027)Be(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,k,ee,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,Y,k,ee,0);else throw new Error("Unknown depthTexture format")}function $e(M){const _=i.get(M),U=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const q=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=q}if(M.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let q=0;q<6;q++)Oe(_.__webglFramebuffer[q],M,q);else{const q=M.texture.mipmaps;q&&q.length>0?Oe(_.__webglFramebuffer[0],M,0):Oe(_.__webglFramebuffer,M,0)}else if(U){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),at(_.__webglDepthbuffer[q],M,!1);else{const $=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ee)}}else{const q=M.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),at(_.__webglDepthbuffer,M,!1);else{const $=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(M,_,U){const q=i.get(M);_!==void 0&&we(q.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&$e(M)}function Ne(M){const _=M.texture,U=i.get(M),q=i.get(_);M.addEventListener("dispose",v);const $=M.textures,ee=M.isWebGLCubeRenderTarget===!0,ae=$.length>1;if(ae||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,a.memory.textures++),ee){U.__webglFramebuffer=[];for(let k=0;k<6;k++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[k]=[];for(let Y=0;Y<_.mipmaps.length;Y++)U.__webglFramebuffer[k][Y]=n.createFramebuffer()}else U.__webglFramebuffer[k]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let k=0;k<_.mipmaps.length;k++)U.__webglFramebuffer[k]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ae)for(let k=0,Y=$.length;k<Y;k++){const fe=i.get($[k]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&Be(M)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let k=0;k<$.length;k++){const Y=$[k];U.__webglColorRenderbuffer[k]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[k]);const fe=s.convert(Y.format,Y.colorSpace),_e=s.convert(Y.type),re=T(Y.internalFormat,fe,_e,Y.normalized,Y.colorSpace,M.isXRRenderTarget===!0),te=vt(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,te,re,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+k,n.RENDERBUFFER,U.__webglColorRenderbuffer[k])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),at(U.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),De(n.TEXTURE_CUBE_MAP,_);for(let k=0;k<6;k++)if(_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)we(U.__webglFramebuffer[k][Y],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,Y);else we(U.__webglFramebuffer[k],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);f(_)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let k=0,Y=$.length;k<Y;k++){const fe=$[k],_e=i.get(fe);let re=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(re=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,_e.__webglTexture),De(re,fe),we(U.__webglFramebuffer,M,fe,n.COLOR_ATTACHMENT0+k,re,0),f(fe)&&S(re)}t.unbindTexture()}else{let k=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(k=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(k,q.__webglTexture),De(k,_),_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)we(U.__webglFramebuffer[Y],M,_,n.COLOR_ATTACHMENT0,k,Y);else we(U.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,k,0);f(_)&&S(k),t.unbindTexture()}M.depthBuffer&&$e(M)}function gt(M){const _=M.textures;for(let U=0,q=_.length;U<q;U++){const $=_[U];if(f($)){const ee=b(M),ae=i.get($).__webglTexture;t.bindTexture(ee,ae),S(ee),t.unbindTexture()}}}const ot=[],Ut=[];function L(M){if(M.samples>0){if(Be(M)===!1){const _=M.textures,U=M.width,q=M.height;let $=n.COLOR_BUFFER_BIT;const ee=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(M),k=_.length>1;if(k)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const Y=M.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),k){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);const _e=i.get(_[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,U,q,0,0,U,q,$,n.NEAREST),c===!0&&(ot.length=0,Ut.length=0,ot.push(n.COLOR_ATTACHMENT0+fe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ot.push(ee),Ut.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ut)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),k)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);const _e=i.get(_[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function vt(M){return Math.min(r.maxSamples,M.samples)}function Be(M){const _=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function it(M){const _=a.render.frame;d.get(M)!==_&&(d.set(M,_),M.update())}function oe(M,_){const U=M.colorSpace,q=M.format,$=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||U!==Xi&&U!==""&&(ze.getTransfer(U)===je?(q!==1023||$!==1009)&&be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",U)),_}function lt(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.getTextureUnits=j,this.setTextureUnits=I,this.setTexture2D=J,this.setTexture2DArray=Q,this.setTexture3D=ce,this.setTextureCube=ve,this.rebindTextures=st,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Qm(n,e){function t(i,r=""){let s;const a=ze.getTransfer(r);if(i===1009)return n.UNSIGNED_BYTE;if(i===1017)return n.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return n.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===35899)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===1010)return n.BYTE;if(i===1011)return n.SHORT;if(i===1012)return n.UNSIGNED_SHORT;if(i===1013)return n.INT;if(i===1014)return n.UNSIGNED_INT;if(i===1015)return n.FLOAT;if(i===1016)return n.HALF_FLOAT;if(i===1021)return n.ALPHA;if(i===1022)return n.RGB;if(i===1023)return n.RGBA;if(i===1026)return n.DEPTH_COMPONENT;if(i===1027)return n.DEPTH_STENCIL;if(i===1028)return n.RED;if(i===1029)return n.RED_INTEGER;if(i===1030)return n.RG;if(i===1031)return n.RG_INTEGER;if(i===1033)return n.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(a===je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496||i===37488||i===37489||i===37490||i===37491)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===36196||i===37492)return a===je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===37496)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===37488)return s.COMPRESSED_R11_EAC;if(i===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(i===37490)return s.COMPRESSED_RG11_EAC;if(i===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===37808)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===36492)return a===je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const e_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class n_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Co(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new en({vertexShader:e_,fragmentShader:t_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new Or(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i_ extends qn{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,d=null,u=null,h=null,m=null,x=null;const E=typeof XRWebGLBinding<"u",p=new n_,f={},S=t.getContextAttributes();let b=null,T=null;const P=[],y=[],R=new Xe;let v=null;const w=new qt;w.viewport=new ft;const F=new qt;F.viewport=new ft;const A=[w,F],G=new dd;let X=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=P[Z];return ue===void 0&&(ue=new ts,P[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=P[Z];return ue===void 0&&(ue=new ts,P[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=P[Z];return ue===void 0&&(ue=new ts,P[Z]=ue),ue.getHandSpace()};function I(Z){const ue=y.indexOf(Z.inputSource);if(ue===-1)return;const ie=P[ue];ie!==void 0&&(ie.update(Z.inputSource,Z.frame,l||a),ie.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",z);for(let Z=0;Z<P.length;Z++){const ue=y[Z];ue!==null&&(y[Z]=null,P[Z].disconnect(ue))}X=null,j=null,p.reset();for(const Z in f)delete f[Z];e.setRenderTarget(b),m=null,h=null,u=null,r=null,T=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u===null&&E&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",V),r.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,ye=null,Ce=null;S.depth&&(Ce=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=S.stencil?1027:1026,ye=S.stencil?1020:1014);const we={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(we),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new Qt(h.textureWidth,h.textureHeight,{format:1023,type:1009,depthTexture:new gi(h.textureWidth,h.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ie={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Qt(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(Z){for(let ue=0;ue<Z.removed.length;ue++){const ie=Z.removed[ue],ye=y.indexOf(ie);ye>=0&&(y[ye]=null,P[ye].disconnect(ie))}for(let ue=0;ue<Z.added.length;ue++){const ie=Z.added[ue];let ye=y.indexOf(ie);if(ye===-1){for(let we=0;we<P.length;we++)if(we>=y.length){y.push(ie),ye=we;break}else if(y[we]===null){y[we]=ie,ye=we;break}if(ye===-1)break}const Ce=P[ye];Ce&&Ce.connect(ie)}}const J=new N,Q=new N;function ce(Z,ue,ie){J.setFromMatrixPosition(ue.matrixWorld),Q.setFromMatrixPosition(ie.matrixWorld);const ye=J.distanceTo(Q),Ce=ue.projectionMatrix.elements,we=ie.projectionMatrix.elements,at=Ce[14]/(Ce[10]-1),Oe=Ce[14]/(Ce[10]+1),$e=(Ce[9]+1)/Ce[5],st=(Ce[9]-1)/Ce[5],Ne=(Ce[8]-1)/Ce[0],gt=(we[8]+1)/we[0],ot=at*Ne,Ut=at*gt,L=ye/(-Ne+gt),vt=L*-Ne;if(ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(vt),Z.translateZ(L),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ce[10]===-1)Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Be=at+L,it=Oe+L,oe=ot-vt,lt=Ut+(ye-vt),M=$e*Oe/it*Be,_=st*Oe/it*Be;Z.projectionMatrix.makePerspective(oe,lt,M,_,Be,it),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ve(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ue=Z.near,ie=Z.far;p.texture!==null&&(p.depthNear>0&&(ue=p.depthNear),p.depthFar>0&&(ie=p.depthFar)),G.near=F.near=w.near=ue,G.far=F.far=w.far=ie,(X!==G.near||j!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),X=G.near,j=G.far),G.layers.mask=Z.layers.mask|6,w.layers.mask=G.layers.mask&-5,F.layers.mask=G.layers.mask&-3;const ye=Z.parent,Ce=G.cameras;ve(G,ye);for(let we=0;we<Ce.length;we++)ve(Ce[we],ye);Ce.length===2?ce(G,w,F):G.projectionMatrix.copy(w.projectionMatrix),Ee(Z,G,ye)};function Ee(Z,ue,ie){ie===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(ie.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Yi*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(Z){return f[Z]};let Ve=null;function Ke(Z,ue){if(d=ue.getViewerPose(l||a),x=ue,d!==null){const ie=d.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let ye=!1;ie.length!==G.cameras.length&&(G.cameras.length=0,ye=!0);for(let Oe=0;Oe<ie.length;Oe++){const $e=ie[Oe];let st=null;if(m!==null)st=m.getViewport($e);else{const gt=u.getViewSubImage(h,$e);st=gt.viewport,Oe===0&&(e.setRenderTargetTextures(T,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(T))}let Ne=A[Oe];Ne===void 0&&(Ne=new qt,Ne.layers.enable(Oe),Ne.viewport=new ft,A[Oe]=Ne),Ne.matrix.fromArray($e.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray($e.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(st.x,st.y,st.width,st.height),Oe===0&&(G.matrix.copy(Ne.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ye===!0&&G.cameras.push(Ne)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){u=i.getBinding();const Oe=u.getDepthInformation(ie[0]);Oe&&Oe.isValid&&Oe.texture&&p.init(Oe,r.renderState)}if(Ce&&Ce.includes("camera-access")&&E){e.state.unbindTexture(),u=i.getBinding();for(let Oe=0;Oe<ie.length;Oe++){const $e=ie[Oe].camera;if($e){let st=f[$e];st||(st=new Co,f[$e]=st);const Ne=u.getCameraImage($e);st.sourceTexture=Ne}}}}for(let ie=0;ie<P.length;ie++){const ye=y[ie],Ce=P[ie];ye!==null&&Ce!==void 0&&Ce.update(ye,ue,l||a)}Ve&&Ve(Z,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),x=null}const De=new Do;De.setAnimationLoop(Ke),this.setAnimationLoop=function(Z){Ve=Z},this.dispose=function(){}}}const r_=new pt,zo=new Re;zo.set(-1,0,0,0,1,0,0,0,1);function s_(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Ro(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,S,b,T){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(p,f):f.isMeshLambertMaterial?(s(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),d(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,T)):f.isMeshMatcapMaterial?(s(p,f),x(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),E(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,S,b):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===1&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===1&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const S=e.get(f),b=S.envMap,T=S.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(r_.makeRotationFromEuler(T)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(zo),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,S,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function E(p,f){const S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function a_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){const T=b.program;i.uniformBlockBinding(S,T)}function l(S,b){let T=r[S.id];T===void 0&&(x(S),T=d(S),r[S.id]=T,S.addEventListener("dispose",p));const P=b.program;i.updateUBOMapping(S,P);const y=e.render.frame;s[S.id]!==y&&(h(S),s[S.id]=y)}function d(S){const b=u();S.__bindingPointIndex=b;const T=n.createBuffer(),P=S.__size,y=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,P,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,T),T}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const b=r[S.id],T=S.uniforms,P=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let y=0,R=T.length;y<R;y++){const v=Array.isArray(T[y])?T[y]:[T[y]];for(let w=0,F=v.length;w<F;w++){const A=v[w];if(m(A,y,w,P)===!0){const G=A.__offset,X=Array.isArray(A.value)?A.value:[A.value];let j=0;for(let I=0;I<X.length;I++){const V=X[I],z=E(V);typeof V=="number"||typeof V=="boolean"?(A.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,G+j,A.__data)):V.isMatrix3?(A.__data[0]=V.elements[0],A.__data[1]=V.elements[1],A.__data[2]=V.elements[2],A.__data[3]=0,A.__data[4]=V.elements[3],A.__data[5]=V.elements[4],A.__data[6]=V.elements[5],A.__data[7]=0,A.__data[8]=V.elements[6],A.__data[9]=V.elements[7],A.__data[10]=V.elements[8],A.__data[11]=0):ArrayBuffer.isView(V)?A.__data.set(new V.constructor(V.buffer,V.byteOffset,A.__data.length)):(V.toArray(A.__data,j),j+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,b,T,P){const y=S.value,R=b+"_"+T;if(P[R]===void 0)return typeof y=="number"||typeof y=="boolean"?P[R]=y:ArrayBuffer.isView(y)?P[R]=y.slice():P[R]=y.clone(),!0;{const v=P[R];if(typeof y=="number"||typeof y=="boolean"){if(v!==y)return P[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(v.equals(y)===!1)return v.copy(y),!0}}return!1}function x(S){const b=S.uniforms;let T=0;const P=16;for(let R=0,v=b.length;R<v;R++){const w=Array.isArray(b[R])?b[R]:[b[R]];for(let F=0,A=w.length;F<A;F++){const G=w[F],X=Array.isArray(G.value)?G.value:[G.value];for(let j=0,I=X.length;j<I;j++){const V=X[j],z=E(V),J=T%P,Q=J%z.boundary,ce=J+Q;T+=Q,ce!==0&&P-ce<z.storage&&(T+=P-ce),G.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=z.storage}}}const y=T%P;return y>0&&(T+=P-y),S.__size=T,S.__cache={},this}function E(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):be("WebGLRenderer: Unsupported uniform value type.",S),b}function p(S){const b=S.target;b.removeEventListener("dispose",p);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}const o_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let an=null;function l_(){return an===null&&(an=new Yh(o_,16,16,1030,1016),an.name="DFG_LUT",an.minFilter=1006,an.magFilter=1006,an.wrapS=1001,an.wrapT=1001,an.generateMipmaps=!1,an.needsUpdate=!0),an}class c_{constructor(e={}){const{canvas:t=hh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:m=1009}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const E=m,p=new Set([1033,1031,1029]),f=new Set([1009,1014,1012,1020,1017,1018]),S=new Uint32Array(4),b=new Int32Array(4),T=new N;let P=null,y=null;const R=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let A=!1,G=null;this._outputColorSpace=Xt;let X=0,j=0,I=null,V=-1,z=null;const J=new ft,Q=new ft;let ce=null;const ve=new et(0);let Ee=0,Ve=t.width,Ke=t.height,De=1,Z=null,ue=null;const ie=new ft(0,0,Ve,Ke),ye=new ft(0,0,Ve,Ke);let Ce=!1;const we=new ks;let at=!1,Oe=!1;const $e=new pt,st=new N,Ne=new ft,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Ut(){return I===null?De:1}let L=i;function vt(g,D){return t.getContext(g,D)}try{const g={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r184"),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),L===null){const D="webgl2";if(L=vt(D,g),L===null)throw vt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw He("WebGLRenderer: "+g.message),g}let Be,it,oe,lt,M,_,U,q,$,ee,ae,k,Y,fe,_e,re,te,Ae,Ie,We,C,ne,W;function pe(){Be=new lp(L),Be.init(),C=new Qm(L,Be),it=new ep(L,Be,e,C),oe=new $m(L,Be),it.reversedDepthBuffer&&h&&oe.buffers.depth.setReversed(!0),lt=new dp(L),M=new Om,_=new Jm(L,Be,oe,M,it,C,lt),U=new op(F),q=new pd(L),ne=new Jf(L,q),$=new cp(L,q,lt,ne),ee=new fp(L,$,q,ne,lt),Ae=new up(L,it,_),_e=new tp(M),ae=new Nm(F,U,Be,it,ne,_e),k=new s_(F,M),Y=new zm,fe=new Xm(Be),te=new $f(F,U,oe,ee,x,c),re=new Km(F,ee,it),W=new a_(L,lt,it,oe),Ie=new Qf(L,Be,lt),We=new hp(L,Be,lt),lt.programs=ae.programs,F.capabilities=it,F.extensions=Be,F.properties=M,F.renderLists=Y,F.shadowMap=re,F.state=oe,F.info=lt}pe(),E!==1009&&(w=new mp(E,t.width,t.height,r,s));const se=new i_(F,L);this.xr=se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const g=Be.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=Be.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(g){g!==void 0&&(De=g,this.setSize(Ve,Ke,!1))},this.getSize=function(g){return g.set(Ve,Ke)},this.setSize=function(g,D,H=!0){if(se.isPresenting){be("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=g,Ke=D,t.width=Math.floor(g*De),t.height=Math.floor(D*De),H===!0&&(t.style.width=g+"px",t.style.height=D+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,g,D)},this.getDrawingBufferSize=function(g){return g.set(Ve*De,Ke*De).floor()},this.setDrawingBufferSize=function(g,D,H){Ve=g,Ke=D,De=H,t.width=Math.floor(g*H),t.height=Math.floor(D*H),this.setViewport(0,0,g,D)},this.setEffects=function(g){if(E===1009){He("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(g){for(let D=0;D<g.length;D++)if(g[D].isOutputPass===!0){be("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(g||[])},this.getCurrentViewport=function(g){return g.copy(J)},this.getViewport=function(g){return g.copy(ie)},this.setViewport=function(g,D,H,O){g.isVector4?ie.set(g.x,g.y,g.z,g.w):ie.set(g,D,H,O),oe.viewport(J.copy(ie).multiplyScalar(De).round())},this.getScissor=function(g){return g.copy(ye)},this.setScissor=function(g,D,H,O){g.isVector4?ye.set(g.x,g.y,g.z,g.w):ye.set(g,D,H,O),oe.scissor(Q.copy(ye).multiplyScalar(De).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(g){oe.setScissorTest(Ce=g)},this.setOpaqueSort=function(g){Z=g},this.setTransparentSort=function(g){ue=g},this.getClearColor=function(g){return g.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(g=!0,D=!0,H=!0){let O=0;if(g){let B=!1;if(I!==null){const de=I.texture.format;B=p.has(de)}if(B){const de=I.texture.type,ge=f.has(de),he=te.getClearColor(),xe=te.getClearAlpha(),Se=he.r,Le=he.g,Fe=he.b;ge?(S[0]=Se,S[1]=Le,S[2]=Fe,S[3]=xe,L.clearBufferuiv(L.COLOR,0,S)):(b[0]=Se,b[1]=Le,b[2]=Fe,b[3]=xe,L.clearBufferiv(L.COLOR,0,b))}else O|=L.COLOR_BUFFER_BIT}D&&(O|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(g){g.setRenderer(this),G=g},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),te.dispose(),Y.dispose(),fe.dispose(),M.dispose(),U.dispose(),ee.dispose(),ne.dispose(),W.dispose(),ae.dispose(),se.dispose(),se.removeEventListener("sessionstart",la),se.removeEventListener("sessionend",ca),zn.stop()};function K(g){g.preventDefault(),va("WebGLRenderer: Context Lost."),A=!0}function Me(){va("WebGLRenderer: Context Restored."),A=!1;const g=lt.autoReset,D=re.enabled,H=re.autoUpdate,O=re.needsUpdate,B=re.type;pe(),lt.autoReset=g,re.enabled=D,re.autoUpdate=H,re.needsUpdate=O,re.type=B}function Pe(g){He("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function ht(g){const D=g.target;D.removeEventListener("dispose",ht),Je(D)}function Je(g){fn(g),M.remove(g)}function fn(g){const D=M.get(g).programs;D!==void 0&&(D.forEach(function(H){ae.releaseProgram(H)}),g.isShaderMaterial&&ae.releaseShaderCache(g))}this.renderBufferDirect=function(g,D,H,O,B,de){D===null&&(D=gt);const ge=B.isMesh&&B.matrixWorld.determinant()<0,he=ih(g,D,H,O,B);oe.setMaterial(O,ge);let xe=H.index,Se=1;if(O.wireframe===!0){if(xe=$.getWireframeAttribute(H),xe===void 0)return;Se=2}const Le=H.drawRange,Fe=H.attributes.position;let Te=Le.start*Se,Qe=(Le.start+Le.count)*Se;de!==null&&(Te=Math.max(Te,de.start*Se),Qe=Math.min(Qe,(de.start+de.count)*Se)),xe!==null?(Te=Math.max(Te,0),Qe=Math.min(Qe,xe.count)):Fe!=null&&(Te=Math.max(Te,0),Qe=Math.min(Qe,Fe.count));const dt=Qe-Te;if(dt<0||dt===1/0)return;ne.setup(B,O,he,H,xe);let ct,tt=Ie;if(xe!==null&&(ct=q.get(xe),tt=We,tt.setIndex(ct)),B.isMesh)O.wireframe===!0?(oe.setLineWidth(O.wireframeLinewidth*Ut()),tt.setMode(L.LINES)):tt.setMode(L.TRIANGLES);else if(B.isLine){let wt=O.linewidth;wt===void 0&&(wt=1),oe.setLineWidth(wt*Ut()),B.isLineSegments?tt.setMode(L.LINES):B.isLineLoop?tt.setMode(L.LINE_LOOP):tt.setMode(L.LINE_STRIP)}else B.isPoints?tt.setMode(L.POINTS):B.isSprite&&tt.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(Be.get("WEBGL_multi_draw"))tt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const wt=B._multiDrawStarts,me=B._multiDrawCounts,Ft=B._multiDrawCount,ke=xe?q.get(xe).bytesPerElement:1,Vt=M.get(O).currentProgram.getUniforms();for(let rn=0;rn<Ft;rn++)Vt.setValue(L,"_gl_DrawID",rn),tt.render(wt[rn]/ke,me[rn])}else if(B.isInstancedMesh)tt.renderInstances(Te,dt,B.count);else if(H.isInstancedBufferGeometry){const wt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,me=Math.min(H.instanceCount,wt);tt.renderInstances(Te,dt,me)}else tt.render(Te,dt)};function nn(g,D,H){g.transparent===!0&&g.side===2&&g.forceSinglePass===!1?(g.side=1,g.needsUpdate=!0,tr(g,D,H),g.side=0,g.needsUpdate=!0,tr(g,D,H),g.side=2):tr(g,D,H)}this.compile=function(g,D,H=null){H===null&&(H=g),y=fe.get(H),y.init(D),v.push(y),H.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(y.pushLight(B),B.castShadow&&y.pushShadow(B))}),g!==H&&g.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(y.pushLight(B),B.castShadow&&y.pushShadow(B))}),y.setupLights();const O=new Set;return g.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const de=B.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){const he=de[ge];nn(he,H,B),O.add(he)}else nn(de,H,B),O.add(de)}),y=v.pop(),O},this.compileAsync=function(g,D,H=null){const O=this.compile(g,D,H);return new Promise(B=>{function de(){if(O.forEach(function(ge){M.get(ge).currentProgram.isReady()&&O.delete(ge)}),O.size===0){B(g);return}setTimeout(de,10)}Be.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Zr=null;function th(g){Zr&&Zr(g)}function la(){zn.stop()}function ca(){zn.start()}const zn=new Do;zn.setAnimationLoop(th),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(g){Zr=g,se.setAnimationLoop(g),g===null?zn.stop():zn.start()},se.addEventListener("sessionstart",la),se.addEventListener("sessionend",ca),this.render=function(g,D){if(D!==void 0&&D.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;G!==null&&G.renderStart(g,D);const H=se.enabled===!0&&se.isPresenting===!0,O=w!==null&&(I===null||H)&&w.begin(F,I);if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(D),D=se.getCamera()),g.isScene===!0&&g.onBeforeRender(F,g,D,I),y=fe.get(g,v.length),y.init(D),y.state.textureUnits=_.getTextureUnits(),v.push(y),$e.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),we.setFromProjectionMatrix($e,2e3,D.reversedDepth),Oe=this.localClippingEnabled,at=_e.init(this.clippingPlanes,Oe),P=Y.get(g,R.length),P.init(),R.push(P),se.enabled===!0&&se.isPresenting===!0){const ge=F.xr.getDepthSensingMesh();ge!==null&&jr(ge,D,-1/0,F.sortObjects)}jr(g,D,0,F.sortObjects),P.finish(),F.sortObjects===!0&&P.sort(Z,ue),ot=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ot&&te.addToRenderList(P,g),this.info.render.frame++,at===!0&&_e.beginShadows();const B=y.state.shadowsArray;if(re.render(B,g,D),at===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(O&&w.hasRenderPass())===!1){const ge=P.opaque,he=P.transmissive;if(y.setupLights(),D.isArrayCamera){const xe=D.cameras;if(he.length>0)for(let Se=0,Le=xe.length;Se<Le;Se++){const Fe=xe[Se];da(ge,he,g,Fe)}ot&&te.render(g);for(let Se=0,Le=xe.length;Se<Le;Se++){const Fe=xe[Se];ha(P,g,Fe,Fe.viewport)}}else he.length>0&&da(ge,he,g,D),ot&&te.render(g),ha(P,g,D)}I!==null&&j===0&&(_.updateMultisampleRenderTarget(I),_.updateRenderTargetMipmap(I)),O&&w.end(F),g.isScene===!0&&g.onAfterRender(F,g,D),ne.resetDefaultState(),V=-1,z=null,v.pop(),v.length>0?(y=v[v.length-1],_.setTextureUnits(y.state.textureUnits),at===!0&&_e.setGlobalState(F.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?P=R[R.length-1]:P=null,G!==null&&G.renderEnd()};function jr(g,D,H,O){if(g.visible===!1)return;if(g.layers.test(D.layers)){if(g.isGroup)H=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(D);else if(g.isLightProbeGrid)y.pushLightProbeGrid(g);else if(g.isLight)y.pushLight(g),g.castShadow&&y.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||we.intersectsSprite(g)){O&&Ne.setFromMatrixPosition(g.matrixWorld).applyMatrix4($e);const ge=ee.update(g),he=g.material;he.visible&&P.push(g,ge,he,H,Ne.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||we.intersectsObject(g))){const ge=ee.update(g),he=g.material;if(O&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),Ne.copy(g.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ne.copy(ge.boundingSphere.center)),Ne.applyMatrix4(g.matrixWorld).applyMatrix4($e)),Array.isArray(he)){const xe=ge.groups;for(let Se=0,Le=xe.length;Se<Le;Se++){const Fe=xe[Se],Te=he[Fe.materialIndex];Te&&Te.visible&&P.push(g,ge,Te,H,Ne.z,Fe)}}else he.visible&&P.push(g,ge,he,H,Ne.z,null)}}const de=g.children;for(let ge=0,he=de.length;ge<he;ge++)jr(de[ge],D,H,O)}function ha(g,D,H,O){const{opaque:B,transmissive:de,transparent:ge}=g;y.setupLightsView(H),at===!0&&_e.setGlobalState(F.clippingPlanes,H),O&&oe.viewport(J.copy(O)),B.length>0&&er(B,D,H),de.length>0&&er(de,D,H),ge.length>0&&er(ge,D,H),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function da(g,D,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[O.id]===void 0){const Te=Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[O.id]=new Qt(1,1,{generateMipmaps:!0,type:Te?1016:1009,minFilter:1008,samples:Math.max(4,it.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const de=y.state.transmissionRenderTarget[O.id],ge=O.viewport||J;de.setSize(ge.z*F.transmissionResolutionScale,ge.w*F.transmissionResolutionScale);const he=F.getRenderTarget(),xe=F.getActiveCubeFace(),Se=F.getActiveMipmapLevel();F.setRenderTarget(de),F.getClearColor(ve),Ee=F.getClearAlpha(),Ee<1&&F.setClearColor(16777215,.5),F.clear(),ot&&te.render(H);const Le=F.toneMapping;F.toneMapping=0;const Fe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),y.setupLightsView(O),at===!0&&_e.setGlobalState(F.clippingPlanes,O),er(g,H,O),_.updateMultisampleRenderTarget(de),_.updateRenderTargetMipmap(de),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Qe=0,dt=D.length;Qe<dt;Qe++){const ct=D[Qe],{object:tt,geometry:wt,material:me,group:Ft}=ct;if(me.side===2&&tt.layers.test(O.layers)){const ke=me.side;me.side=1,me.needsUpdate=!0,ua(tt,H,O,wt,me,Ft),me.side=ke,me.needsUpdate=!0,Te=!0}}Te===!0&&(_.updateMultisampleRenderTarget(de),_.updateRenderTargetMipmap(de))}F.setRenderTarget(he,xe,Se),F.setClearColor(ve,Ee),Fe!==void 0&&(O.viewport=Fe),F.toneMapping=Le}function er(g,D,H){const O=D.isScene===!0?D.overrideMaterial:null;for(let B=0,de=g.length;B<de;B++){const ge=g[B],{object:he,geometry:xe,group:Se}=ge;let Le=ge.material;Le.allowOverride===!0&&O!==null&&(Le=O),he.layers.test(H.layers)&&ua(he,D,H,xe,Le,Se)}}function ua(g,D,H,O,B,de){g.onBeforeRender(F,D,H,O,B,de),g.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),B.onBeforeRender(F,D,H,O,g,de),B.transparent===!0&&B.side===2&&B.forceSinglePass===!1?(B.side=1,B.needsUpdate=!0,F.renderBufferDirect(H,D,O,B,g,de),B.side=0,B.needsUpdate=!0,F.renderBufferDirect(H,D,O,B,g,de),B.side=2):F.renderBufferDirect(H,D,O,B,g,de),g.onAfterRender(F,D,H,O,B,de)}function tr(g,D,H){D.isScene!==!0&&(D=gt);const O=M.get(g),B=y.state.lights,de=y.state.shadowsArray,ge=B.state.version,he=ae.getParameters(g,B.state,de,D,H,y.state.lightProbeGridArray),xe=ae.getProgramCacheKey(he);let Se=O.programs;O.environment=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?D.environment:null,O.fog=D.fog;const Le=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap;O.envMap=U.get(g.envMap||O.environment,Le),O.envMapRotation=O.environment!==null&&g.envMap===null?D.environmentRotation:g.envMapRotation,Se===void 0&&(g.addEventListener("dispose",ht),Se=new Map,O.programs=Se);let Fe=Se.get(xe);if(Fe!==void 0){if(O.currentProgram===Fe&&O.lightsStateVersion===ge)return pa(g,he),Fe}else he.uniforms=ae.getUniforms(g),G!==null&&g.isNodeMaterial&&G.build(g,H,he),g.onBeforeCompile(he,F),Fe=ae.acquireProgram(he,xe),Se.set(xe,Fe),O.uniforms=he.uniforms;const Te=O.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(Te.clippingPlanes=_e.uniform),pa(g,he),O.needsLights=sh(g),O.lightsStateVersion=ge,O.needsLights&&(Te.ambientLightColor.value=B.state.ambient,Te.lightProbe.value=B.state.probe,Te.directionalLights.value=B.state.directional,Te.directionalLightShadows.value=B.state.directionalShadow,Te.spotLights.value=B.state.spot,Te.spotLightShadows.value=B.state.spotShadow,Te.rectAreaLights.value=B.state.rectArea,Te.ltc_1.value=B.state.rectAreaLTC1,Te.ltc_2.value=B.state.rectAreaLTC2,Te.pointLights.value=B.state.point,Te.pointLightShadows.value=B.state.pointShadow,Te.hemisphereLights.value=B.state.hemi,Te.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Te.spotLightMatrix.value=B.state.spotLightMatrix,Te.spotLightMap.value=B.state.spotLightMap,Te.pointShadowMatrix.value=B.state.pointShadowMatrix),O.lightProbeGrid=y.state.lightProbeGridArray.length>0,O.currentProgram=Fe,O.uniformsList=null,Fe}function fa(g){if(g.uniformsList===null){const D=g.currentProgram.getUniforms();g.uniformsList=br.seqWithValue(D.seq,g.uniforms)}return g.uniformsList}function pa(g,D){const H=M.get(g);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function nh(g,D){if(g.length===0)return null;if(g.length===1)return g[0].texture!==null?g[0]:null;T.setFromMatrixPosition(D.matrixWorld);for(let H=0,O=g.length;H<O;H++){const B=g[H];if(B.texture!==null&&B.boundingBox.containsPoint(T))return B}return null}function ih(g,D,H,O,B){D.isScene!==!0&&(D=gt),_.resetTextureUnits();const de=D.fog,ge=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?D.environment:null,he=I===null?F.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ze.workingColorSpace,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Se=U.get(O.envMap||ge,xe),Le=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Fe=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Te=!!H.morphAttributes.position,Qe=!!H.morphAttributes.normal,dt=!!H.morphAttributes.color;let ct=0;O.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ct=F.toneMapping);const tt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,wt=tt!==void 0?tt.length:0,me=M.get(O),Ft=y.state.lights;if(at===!0&&(Oe===!0||g!==z)){const rt=g===z&&O.id===V;_e.setState(O,g,rt)}let ke=!1;O.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Ft.state.version||me.outputColorSpace!==he||B.isBatchedMesh&&me.batching===!1||!B.isBatchedMesh&&me.batching===!0||B.isBatchedMesh&&me.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&me.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&me.instancing===!1||!B.isInstancedMesh&&me.instancing===!0||B.isSkinnedMesh&&me.skinning===!1||!B.isSkinnedMesh&&me.skinning===!0||B.isInstancedMesh&&me.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&me.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&me.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&me.instancingMorph===!1&&B.morphTexture!==null||me.envMap!==Se||O.fog===!0&&me.fog!==de||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==_e.numPlanes||me.numIntersection!==_e.numIntersection)||me.vertexAlphas!==Le||me.vertexTangents!==Fe||me.morphTargets!==Te||me.morphNormals!==Qe||me.morphColors!==dt||me.toneMapping!==ct||me.morphTargetsCount!==wt||!!me.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(ke=!0):(ke=!0,me.__version=O.version);let Vt=me.currentProgram;ke===!0&&(Vt=tr(O,D,B),G&&O.isNodeMaterial&&G.onUpdateProgram(O,Vt,me));let rn=!1,Tn=!1,jn=!1;const nt=Vt.getUniforms(),ut=me.uniforms;if(oe.useProgram(Vt.program)&&(rn=!0,Tn=!0,jn=!0),O.id!==V&&(V=O.id,Tn=!0),me.needsLights){const rt=nh(y.state.lightProbeGridArray,B);me.lightProbeGrid!==rt&&(me.lightProbeGrid=rt,Tn=!0)}if(rn||z!==g){oe.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),nt.setValue(L,"projectionMatrix",g.projectionMatrix),nt.setValue(L,"viewMatrix",g.matrixWorldInverse);const bn=nt.map.cameraPosition;bn!==void 0&&bn.setValue(L,st.setFromMatrixPosition(g.matrixWorld)),it.logarithmicDepthBuffer&&nt.setValue(L,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&nt.setValue(L,"isOrthographic",g.isOrthographicCamera===!0),z!==g&&(z=g,Tn=!0,jn=!0)}if(me.needsLights&&(Ft.state.directionalShadowMap.length>0&&nt.setValue(L,"directionalShadowMap",Ft.state.directionalShadowMap,_),Ft.state.spotShadowMap.length>0&&nt.setValue(L,"spotShadowMap",Ft.state.spotShadowMap,_),Ft.state.pointShadowMap.length>0&&nt.setValue(L,"pointShadowMap",Ft.state.pointShadowMap,_)),B.isSkinnedMesh){nt.setOptional(L,B,"bindMatrix"),nt.setOptional(L,B,"bindMatrixInverse");const rt=B.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),nt.setValue(L,"boneTexture",rt.boneTexture,_))}B.isBatchedMesh&&(nt.setOptional(L,B,"batchingTexture"),nt.setValue(L,"batchingTexture",B._matricesTexture,_),nt.setOptional(L,B,"batchingIdTexture"),nt.setValue(L,"batchingIdTexture",B._indirectTexture,_),nt.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&nt.setValue(L,"batchingColorTexture",B._colorsTexture,_));const yn=H.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Ae.update(B,H,Vt),(Tn||me.receiveShadow!==B.receiveShadow)&&(me.receiveShadow=B.receiveShadow,nt.setValue(L,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&D.environment!==null&&(ut.envMapIntensity.value=D.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=l_()),Tn){if(nt.setValue(L,"toneMappingExposure",F.toneMappingExposure),me.needsLights&&rh(ut,jn),de&&O.fog===!0&&k.refreshFogUniforms(ut,de),k.refreshMaterialUniforms(ut,O,De,Ke,y.state.transmissionRenderTarget[g.id]),me.needsLights&&me.lightProbeGrid){const rt=me.lightProbeGrid;ut.probesSH.value=rt.texture,ut.probesMin.value.copy(rt.boundingBox.min),ut.probesMax.value.copy(rt.boundingBox.max),ut.probesResolution.value.copy(rt.resolution)}br.upload(L,fa(me),ut,_)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(br.upload(L,fa(me),ut,_),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&nt.setValue(L,"center",B.center),nt.setValue(L,"modelViewMatrix",B.modelViewMatrix),nt.setValue(L,"normalMatrix",B.normalMatrix),nt.setValue(L,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){const rt=O.uniformsGroups;for(let bn=0,Kn=rt.length;bn<Kn;bn++){const ma=rt[bn];W.update(ma,Vt),W.bind(ma,Vt)}}return Vt}function rh(g,D){g.ambientLightColor.needsUpdate=D,g.lightProbe.needsUpdate=D,g.directionalLights.needsUpdate=D,g.directionalLightShadows.needsUpdate=D,g.pointLights.needsUpdate=D,g.pointLightShadows.needsUpdate=D,g.spotLights.needsUpdate=D,g.spotLightShadows.needsUpdate=D,g.rectAreaLights.needsUpdate=D,g.hemisphereLights.needsUpdate=D}function sh(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(g,D,H){const O=M.get(g);O.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),M.get(g.texture).__webglTexture=D,M.get(g.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,D){const H=M.get(g);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0};const ah=L.createFramebuffer();this.setRenderTarget=function(g,D=0,H=0){I=g,X=D,j=H;let O=null,B=!1,de=!1;if(g){const he=M.get(g);if(he.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(L.FRAMEBUFFER,he.__webglFramebuffer),J.copy(g.viewport),Q.copy(g.scissor),ce=g.scissorTest,oe.viewport(J),oe.scissor(Q),oe.setScissorTest(ce),V=-1;return}else if(he.__webglFramebuffer===void 0)_.setupRenderTarget(g);else if(he.__hasExternalTextures)_.rebindTextures(g,M.get(g.texture).__webglTexture,M.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const Le=g.depthTexture;if(he.__boundDepthTexture!==Le){if(Le!==null&&M.has(Le)&&(g.width!==Le.image.width||g.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(g)}}const xe=g.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(de=!0);const Se=M.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Se[D])?O=Se[D][H]:O=Se[D],B=!0):g.samples>0&&_.useMultisampledRTT(g)===!1?O=M.get(g).__webglMultisampledFramebuffer:Array.isArray(Se)?O=Se[H]:O=Se,J.copy(g.viewport),Q.copy(g.scissor),ce=g.scissorTest}else J.copy(ie).multiplyScalar(De).floor(),Q.copy(ye).multiplyScalar(De).floor(),ce=Ce;if(H!==0&&(O=ah),oe.bindFramebuffer(L.FRAMEBUFFER,O)&&oe.drawBuffers(g,O),oe.viewport(J),oe.scissor(Q),oe.setScissorTest(ce),B){const he=M.get(g.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,he.__webglTexture,H)}else if(de){const he=D;for(let xe=0;xe<g.textures.length;xe++){const Se=M.get(g.textures[xe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+xe,Se.__webglTexture,H,he)}}else if(g!==null&&H!==0){const he=M.get(g.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,he.__webglTexture,H)}V=-1},this.readRenderTargetPixels=function(g,D,H,O,B,de,ge,he=0){if(!(g&&g.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=M.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){oe.bindFramebuffer(L.FRAMEBUFFER,xe);try{const Se=g.textures[he],Le=Se.format,Fe=Se.type;if(g.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he),!it.textureFormatReadable(Le)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Fe)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=g.width-O&&H>=0&&H<=g.height-B&&L.readPixels(D,H,O,B,C.convert(Le),C.convert(Fe),de)}finally{const Se=I!==null?M.get(I).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(g,D,H,O,B,de,ge,he=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=M.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(D>=0&&D<=g.width-O&&H>=0&&H<=g.height-B){oe.bindFramebuffer(L.FRAMEBUFFER,xe);const Se=g.textures[he],Le=Se.format,Fe=Se.type;if(g.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he),!it.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(D,H,O,B,C.convert(Le),C.convert(Fe),0);const Qe=I!==null?M.get(I).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,Qe);const dt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await dh(L,dt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.deleteBuffer(Te),L.deleteSync(dt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,D=null,H=0){const O=Math.pow(2,-H),B=Math.floor(g.image.width*O),de=Math.floor(g.image.height*O),ge=D!==null?D.x:0,he=D!==null?D.y:0;_.setTexture2D(g,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,ge,he,B,de),oe.unbindTexture()};const oh=L.createFramebuffer(),lh=L.createFramebuffer();this.copyTextureToTexture=function(g,D,H=null,O=null,B=0,de=0){let ge,he,xe,Se,Le,Fe,Te,Qe,dt;const ct=g.isCompressedTexture?g.mipmaps[de]:g.image;if(H!==null)ge=H.max.x-H.min.x,he=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Se=H.min.x,Le=H.min.y,Fe=H.isBox3?H.min.z:0;else{const ut=Math.pow(2,-B);ge=Math.floor(ct.width*ut),he=Math.floor(ct.height*ut),g.isDataArrayTexture?xe=ct.depth:g.isData3DTexture?xe=Math.floor(ct.depth*ut):xe=1,Se=0,Le=0,Fe=0}O!==null?(Te=O.x,Qe=O.y,dt=O.z):(Te=0,Qe=0,dt=0);const tt=C.convert(D.format),wt=C.convert(D.type);let me;D.isData3DTexture?(_.setTexture3D(D,0),me=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(_.setTexture2DArray(D,0),me=L.TEXTURE_2D_ARRAY):(_.setTexture2D(D,0),me=L.TEXTURE_2D),oe.activeTexture(L.TEXTURE0),oe.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),oe.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),oe.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const Ft=oe.getParameter(L.UNPACK_ROW_LENGTH),ke=oe.getParameter(L.UNPACK_IMAGE_HEIGHT),Vt=oe.getParameter(L.UNPACK_SKIP_PIXELS),rn=oe.getParameter(L.UNPACK_SKIP_ROWS),Tn=oe.getParameter(L.UNPACK_SKIP_IMAGES);oe.pixelStorei(L.UNPACK_ROW_LENGTH,ct.width),oe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ct.height),oe.pixelStorei(L.UNPACK_SKIP_PIXELS,Se),oe.pixelStorei(L.UNPACK_SKIP_ROWS,Le),oe.pixelStorei(L.UNPACK_SKIP_IMAGES,Fe);const jn=g.isDataArrayTexture||g.isData3DTexture,nt=D.isDataArrayTexture||D.isData3DTexture;if(g.isDepthTexture){const ut=M.get(g),yn=M.get(D),rt=M.get(ut.__renderTarget),bn=M.get(yn.__renderTarget);oe.bindFramebuffer(L.READ_FRAMEBUFFER,rt.__webglFramebuffer),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let Kn=0;Kn<xe;Kn++)jn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(g).__webglTexture,B,Fe+Kn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(D).__webglTexture,de,dt+Kn)),L.blitFramebuffer(Se,Le,ge,he,Te,Qe,ge,he,L.DEPTH_BUFFER_BIT,L.NEAREST);oe.bindFramebuffer(L.READ_FRAMEBUFFER,null),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||g.isRenderTargetTexture||M.has(g)){const ut=M.get(g),yn=M.get(D);oe.bindFramebuffer(L.READ_FRAMEBUFFER,oh),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,lh);for(let rt=0;rt<xe;rt++)jn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ut.__webglTexture,B,Fe+rt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ut.__webglTexture,B),nt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yn.__webglTexture,de,dt+rt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,yn.__webglTexture,de),B!==0?L.blitFramebuffer(Se,Le,ge,he,Te,Qe,ge,he,L.COLOR_BUFFER_BIT,L.NEAREST):nt?L.copyTexSubImage3D(me,de,Te,Qe,dt+rt,Se,Le,ge,he):L.copyTexSubImage2D(me,de,Te,Qe,Se,Le,ge,he);oe.bindFramebuffer(L.READ_FRAMEBUFFER,null),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else nt?g.isDataTexture||g.isData3DTexture?L.texSubImage3D(me,de,Te,Qe,dt,ge,he,xe,tt,wt,ct.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(me,de,Te,Qe,dt,ge,he,xe,tt,ct.data):L.texSubImage3D(me,de,Te,Qe,dt,ge,he,xe,tt,wt,ct):g.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,de,Te,Qe,ge,he,tt,wt,ct.data):g.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,de,Te,Qe,ct.width,ct.height,tt,ct.data):L.texSubImage2D(L.TEXTURE_2D,de,Te,Qe,ge,he,tt,wt,ct);oe.pixelStorei(L.UNPACK_ROW_LENGTH,Ft),oe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ke),oe.pixelStorei(L.UNPACK_SKIP_PIXELS,Vt),oe.pixelStorei(L.UNPACK_SKIP_ROWS,rn),oe.pixelStorei(L.UNPACK_SKIP_IMAGES,Tn),de===0&&D.generateMipmaps&&L.generateMipmap(me),oe.unbindTexture()},this.initRenderTarget=function(g){M.get(g).__webglFramebuffer===void 0&&_.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?_.setTextureCube(g,0):g.isData3DTexture?_.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?_.setTexture2DArray(g,0):_.setTexture2D(g,0),oe.unbindTexture()},this.resetState=function(){X=0,j=0,I=null,oe.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}var h_=Object.defineProperty,Xs=(n,e)=>{for(var t in e)h_(n,t,{get:e[t],enumerable:!0})},d_={};Xs(d_,{ACTIONS:()=>Xo,ANIMATION_MIN_DURATION:()=>Rs,CAPTURE_EVENTS_CLASS:()=>$i,CTRLZOOM_TIMEOUT:()=>Wo,DBLCLICK_DELAY:()=>Ho,EASINGS:()=>wr,ICONS:()=>tn,IDS:()=>yt,KEY_CODES:()=>Et,LONGTOUCH_DELAY:()=>Vo,MOVE_THRESHOLD:()=>Go,SPHERE_RADIUS:()=>Sn,TWOFINGERSOVERLAY_DELAY:()=>ko,VIEWER_DATA:()=>Bn});var u_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,f_='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',p_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,m_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,__=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,g_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,v_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,x_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,M_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,Rs=500,Go=4,Ho=300,Vo=500,ko=100,Wo=2e3,Sn=10,Bn="photoSphereViewer",$i="psv--capture-event",Xo=(n=>(n.ROTATE_UP="ROTATE_UP",n.ROTATE_DOWN="ROTATE_DOWN",n.ROTATE_RIGHT="ROTATE_RIGHT",n.ROTATE_LEFT="ROTATE_LEFT",n.ZOOM_IN="ZOOM_IN",n.ZOOM_OUT="ZOOM_OUT",n))(Xo||{}),yt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},Et={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},tn={arrow:u_,close:f_,download:p_,fullscreenIn:m_,fullscreenOut:__,info:g_,menu:v_,zoomIn:x_,zoomOut:M_},wr={linear:n=>n,inQuad:n=>n*n,outQuad:n=>n*(2-n),inOutQuad:n=>n<.5?2*n*n:-1+(4-2*n)*n,inCubic:n=>n*n*n,outCubic:n=>--n*n*n+1,inOutCubic:n=>n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1,inQuart:n=>n*n*n*n,outQuart:n=>1- --n*n*n*n,inOutQuart:n=>n<.5?8*n*n*n*n:1-8*--n*n*n*n,inQuint:n=>n*n*n*n*n,outQuint:n=>1+--n*n*n*n*n,inOutQuint:n=>n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n,inSine:n=>1-Math.cos(n*(Math.PI/2)),outSine:n=>Math.sin(n*(Math.PI/2)),inOutSine:n=>.5-.5*Math.cos(Math.PI*n),inExpo:n=>Math.pow(2,10*(n-1)),outExpo:n=>1-Math.pow(2,-10*n),inOutExpo:n=>(n=n*2-1)<0?.5*Math.pow(2,10*n):1-.5*Math.pow(2,-10*n),inCirc:n=>1-Math.sqrt(1-n*n),outCirc:n=>Math.sqrt(1-(n-1)*(n-1)),inOutCirc:n=>(n*=2)<1?.5-.5*Math.sqrt(1-n*n):.5+.5*Math.sqrt(1-(n-=2)*n)},S_={};Xs(S_,{Animation:()=>Ir,Dynamic:()=>Di,MultiDynamic:()=>pl,PressHandler:()=>Wr,Slider:()=>_l,SliderDirection:()=>ml,addClasses:()=>qs,angle:()=>Yo,applyEulerInverse:()=>Us,checkClosedShadowDom:()=>ul,checkStylesheet:()=>dl,checkVersion:()=>Js,cleanCssPosition:()=>cl,clone:()=>Hr,createTexture:()=>Is,cssPositionIsOrdered:()=>$s,dasherize:()=>w_,deepEqual:()=>al,deepmerge:()=>rl,distance:()=>qo,exitFullscreen:()=>nl,firstNonNull:()=>on,getAbortError:()=>Ls,getAngle:()=>jo,getClosest:()=>$o,getConfigParser:()=>kr,getElement:()=>Ko,getEventTarget:()=>Rr,getMatchingTarget:()=>Jo,getPosition:()=>Qo,getShortestArc:()=>Zo,getStyleProperty:()=>hn,getTouchData:()=>Ps,getXMPValue:()=>Bt,greatArcDistance:()=>T_,hasParent:()=>b_,invertResolvableBoolean:()=>Vr,isAbortError:()=>ll,isEmpty:()=>sl,isExtendedPosition:()=>Ks,isFullscreenEnabled:()=>el,isNil:()=>Tt,isPlainObject:()=>Zs,keyPressMatch:()=>Ys,logWarn:()=>bt,mergePanoData:()=>fl,parseAngle:()=>ln,parsePoint:()=>A_,parseSpeed:()=>hl,removeClasses:()=>y_,requestFullscreen:()=>tl,resolveBoolean:()=>js,speedToDuration:()=>Ds,sum:()=>E_,throttle:()=>il,toggleClass:()=>Gr,wrap:()=>Fi});function Fi(n,e){let t=n%e;return t<0&&(t+=e),t}function E_(n){return n.reduce((e,t)=>e+t,0)}function qo(n,e){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function Yo(n,e){return Math.atan2(e.y-n.y,e.x-n.x)}function Zo(n,e){return[0,Math.PI*2,-Math.PI*2].reduce((i,r)=>{const s=e-n+r;return Math.abs(s)<Math.abs(i)?s:i},1/0)}function jo(n,e){return Math.acos(Math.cos(n.pitch)*Math.cos(e.pitch)*Math.cos(n.yaw-e.yaw)+Math.sin(n.pitch)*Math.sin(e.pitch))}function T_([n,e],[t,i]){n-t>Math.PI?n-=2*Math.PI:n-t<-Math.PI&&(n+=2*Math.PI);const r=(t-n)*Math.cos((e+i)/2),s=i-e;return Math.sqrt(r*r+s*s)}function Ko(n){return typeof n=="string"?n.match(/^[a-z]/i)?document.getElementById(n):document.querySelector(n):n}function Gr(n,e,t){t===void 0?n.classList.toggle(e):t?n.classList.add(e):t||n.classList.remove(e)}function qs(n,e){n.classList.add(...e.split(" ").filter(t=>!!t))}function y_(n,e){n.classList.remove(...e.split(" ").filter(t=>!!t))}function b_(n,e){let t=n;do{if(t===e)return!0;t=t.parentElement}while(t);return!1}function $o(n,e){if(!n?.matches)return null;let t=n;do{if(t.matches(e))return t;t=t.parentElement}while(t);return null}function Rr(n){return n?.composedPath()[0]||null}function Jo(n,e){return n?n.composedPath().find(t=>!(t instanceof HTMLElement)&&!(t instanceof SVGElement)?!1:t.matches(e)):null}function Qo(n){let e=0,t=0,i=n;for(;i;)e+=i.offsetLeft-i.scrollLeft+i.clientLeft,t+=i.offsetTop-i.scrollTop+i.clientTop,i=i.offsetParent;return e-=window.scrollX,t-=window.scrollY,{x:e,y:t}}function hn(n,e){return window.getComputedStyle(n).getPropertyValue(e)}function Ps(n){if(n.touches.length<2)return null;const e={x:n.touches[0].clientX,y:n.touches[0].clientY},t={x:n.touches[1].clientX,y:n.touches[1].clientY};return{distance:qo(e,t),angle:Yo(e,t),center:{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}}var Pr;function el(n,e=!1){return e?n===Pr:document.fullscreenElement===n}function tl(n,e=!1){e?(Pr=n,n.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):n.requestFullscreen()}function nl(n=!1){n?(Pr.classList.remove("psv-fullscreen-emulation"),Pr=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function Ys(n,e){let t,i=!1,r=!1,s=!1,a=!1;return e==="+"?t=e:e.split("+").forEach(o=>{switch(o){case"Shift":i=!0;break;case"Ctrl":r=!0;break;case"Alt":s=!0;break;case"Meta":a=!0;break;case"Space":t=" ";break;case"Plus":t="+";break;case"Minus":t="-";break;default:t=o;break}}),i===n.shiftKey&&r===n.ctrlKey&&s===n.altKey&&a===n.metaKey&&t===n.key}function w_(n){return n.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,t)=>(t>0?"-":"")+e.toLowerCase())}function il(n,e){let t=!1;return function(...i){t||(t=!0,setTimeout(()=>{n.apply(this,i),t=!1},e))}}function Zs(n){if(typeof n!="object"||n===null||Object.prototype.toString.call(n)!=="[object Object]")return!1;if(Object.getPrototypeOf(n)===null)return!0;let e=n;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(n)===e}function rl(n,e){const t=e;return(function i(r,s){return Array.isArray(s)?(!r||!Array.isArray(r)?r=[]:r.length=0,s.forEach((a,o)=>{r[o]=i(null,a)})):typeof s=="object"?((!r||Array.isArray(r))&&(r={}),Object.keys(s).forEach(a=>{a!=="__proto__"&&(typeof s[a]!="object"||!s[a]||!Zs(s[a])?r[a]=s[a]:s[a]!==t&&(r[a]?i(r[a],s[a]):r[a]=i(null,s[a])))})):r=s,r})(n,e)}function Hr(n){return rl(null,n)}function sl(n){return!n||Object.keys(n).length===0&&n.constructor===Object}function Tt(n){return n==null}function on(...n){for(const e of n)if(!Tt(e))return e;return null}function al(n,e){if(n===e)return!0;if(fo(n)&&fo(e)){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t of Object.keys(n))if(!al(n[t],e[t]))return!1;return!0}else return!1}function fo(n){return typeof n=="object"&&n!==null}var Ye=class ol extends Error{constructor(e,t){super(t&&t instanceof Error?`${e}: ${t.message}`:e),this.name="PSVError",Error.captureStackTrace?.(this,ol)}};function js(n,e){Zs(n)?(e(n.initial,!0),n.promise.then(t=>e(t,!1))):e(n,!0)}function Vr(n){return{initial:!n.initial,promise:n.promise.then(e=>!e)}}function Ls(){const n=new Error("Loading was aborted.");return n.name="AbortError",n}function ll(n){return n?.name==="AbortError"}function bt(n){console.warn(`PhotoSphereViewer: ${n}`)}function Ks(n){return!n||Array.isArray(n)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,t])=>n[e]!==void 0&&n[t]!==void 0)}function Bt(n,e,t=!0){let i=n.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(i!==null){const r=t?parseInt(i[1],10):parseFloat(i[1]);return isNaN(r)?null:r}if(i=n.match("GPano:"+e+'="(.*?)"'),i!==null){const r=t?parseInt(i[1],10):parseFloat(i[1]);return isNaN(r)?null:r}return null}var po={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Lr=["left","center","right"],Dr=["top","center","bottom"],mo=[...Lr,...Dr],Wt="center";function A_(n){if(!n)return{x:.5,y:.5};if(typeof n=="object")return n;let e=n.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(po[e[0]]?e=[e[0],Wt]:e=[e[0],e[0]]);const t=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(r=>po[r]||r),t||e.reverse();const i=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return i?{x:parseFloat(i[1])/100,y:parseFloat(i[2])/100}:{x:.5,y:.5}}function cl(n,{allowCenter:e,cssOrder:t}={allowCenter:!0,cssOrder:!0}){return n?(typeof n=="string"&&(n=n.split(" ")),n.length===1&&(n[0]===Wt?n=[Wt,Wt]:Lr.indexOf(n[0])!==-1?n=[Wt,n[0]]:Dr.indexOf(n[0])!==-1&&(n=[n[0],Wt])),n.length!==2||mo.indexOf(n[0])===-1||mo.indexOf(n[1])===-1?(bt(`Unparsable position ${n}`),null):!e&&n[0]===Wt&&n[1]===Wt?(bt("Invalid position center center"),null):(t&&!$s(n)&&(n=[n[1],n[0]]),n[1]===Wt&&Lr.indexOf(n[0])!==-1&&(n=[Wt,n[0]]),n[0]===Wt&&Dr.indexOf(n[1])!==-1&&(n=[n[1],Wt]),n)):null}function $s(n){return Dr.indexOf(n[0])!==-1&&Lr.indexOf(n[1])!==-1}function hl(n){let e;if(typeof n=="string"){const t=n.toString().trim();let i=parseFloat(t.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const r=t.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(r.match(/(pm|per minute)$/)&&(i/=60),r){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=qe.degToRad(i);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=i;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=i*Math.PI*2;break;default:throw new Ye(`Unknown speed unit "${r}"`)}}else e=n;return e}function Ds(n,e){if(typeof n!="number"){const t=hl(n);return e/Math.abs(t)*1e3}else return Math.abs(n)}function ln(n,e=!1,t=e){let i;if(typeof n=="string"){const r=n.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!r)throw new Ye(`Unknown angle "${n}"`);const s=parseFloat(r[1]),a=r[2];if(a)switch(a){case"deg":case"degs":i=qe.degToRad(s);break;case"rad":case"rads":i=s;break;default:throw new Ye(`Unknown angle unit "${a}"`)}else i=s}else if(typeof n=="number"&&!isNaN(n))i=n;else throw new Ye(`Unknown angle "${n}"`);return i=Fi(e?i+Math.PI:i,Math.PI*2),e?qe.clamp(i-Math.PI,-Math.PI/(t?2:1),Math.PI/(t?2:1)):i}function Is(n,e=!1){const t=new Rt(n);return t.needsUpdate=!0,t.minFilter=e?1008:1006,t.generateMipmaps=e,t.anisotropy=e?2:1,t}var _o=new Yn;function Us(n,e){_o.setFromEuler(e).invert(),n.applyQuaternion(_o)}function kr(n,e){const t=function(i){const r=Hr({...n,...i}),s={};for(let[a,o]of Object.entries(r)){if(e&&a in e)o=e[a](o,{rawConfig:r,defValue:n[a]});else if(!(a in n)){bt(`Unknown option ${a}`);continue}s[a]=o}return s};return t.defaults=n,t.parsers=e||{},t}function dl(n,e){hn(n,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function Js(n,e,t){e&&e!==t&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${n} is in version ${e} but @photo-sphere-viewer/core is in version ${t}`)}function ul(n){do{if(n instanceof ShadowRoot&&n.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}n=n.parentNode}while(n)}function fl(n,e,t,i){const r={isEquirectangular:!0,fullWidth:on(t?.fullWidth,i?.fullWidth),fullHeight:on(t?.fullHeight,i?.fullHeight),croppedWidth:on(t?.croppedWidth,i?.croppedWidth,n),croppedHeight:on(t?.croppedHeight,i?.croppedHeight,e),croppedX:on(t?.croppedX,i?.croppedX),croppedY:on(t?.croppedY,i?.croppedY),poseHeading:on(t?.poseHeading,i?.poseHeading,0),posePitch:on(t?.posePitch,i?.posePitch,0),poseRoll:on(t?.poseRoll,i?.poseRoll,0),initialHeading:i?.initialHeading,initialPitch:i?.initialPitch,initialFov:i?.initialFov};if(r.croppedWidth!==n){const s=n/r.croppedWidth;["fullWidth","fullHeight","croppedWidth","croppedHeight","croppedX","croppedY"].forEach(a=>{r[a]&&(r[a]=Math.round(r[a]*s))})}return!r.fullWidth&&!r.fullHeight&&(r.fullWidth=Math.max(r.croppedWidth,r.croppedHeight*2),r.fullHeight=Math.round(r.fullWidth/2)),r.fullWidth||(r.fullWidth=r.fullHeight*2),r.fullHeight||(r.fullHeight=Math.round(r.fullWidth/2)),r.croppedX===null&&(r.croppedX=Math.round((r.fullWidth-n)/2)),r.croppedY===null&&(r.croppedY=Math.round((r.fullHeight-e)/2)),Math.abs(r.fullWidth-r.fullHeight*2)>1&&(bt("Invalid panoData, fullWidth should be twice fullHeight"),r.fullHeight=Math.round(r.fullWidth/2)),r.croppedX+r.croppedWidth>r.fullWidth&&(bt("Invalid panoData, croppedX + croppedWidth > fullWidth"),r.croppedX=r.fullWidth-r.croppedWidth),r.croppedY+r.croppedHeight>r.fullHeight&&(bt("Invalid panoData, croppedY + croppedHeight > fullHeight"),r.croppedY=r.fullHeight-r.croppedHeight),r.croppedX<0&&(bt("Invalid panoData, croppedX < 0"),r.croppedX=0),r.croppedY<0&&(bt("Invalid panoData, croppedY < 0"),r.croppedY=0),r}var Ir=class{constructor(n){this.easing=wr.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=n,n?(n.easing&&(this.easing=typeof n.easing=="function"?n.easing:wr[n.easing]||wr.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},n.delay||0)):this.resolved=!0}__run(n){if(this.cancelled)return;this.start||(this.start=n);const e=(n-this.start)/this.options.duration,t={};if(e<1){for(const[i,r]of Object.entries(this.options.properties))if(r){const s=r.start+(r.end-r.start)*this.easing(e);t[i]=s}this.options.onTick(t,e),this.animationFrame=window.requestAnimationFrame(i=>this.__run(i))}else{for(const[i,r]of Object.entries(this.options.properties))r&&(t[i]=r.end);this.options.onTick(t,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(n){n?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(n)),this.callbacks.length=0}then(n){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(n):new Promise(e=>{this.callbacks.push(e)}).then(n)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},Di=class{constructor(n,e){if(this.fn=n,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new Ye("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(n){this.__current=n}setSpeed(n){this.speed=n}goto(n,e=1){this.mode=2,this.target=this.wrap?Fi(n,this.max):qe.clamp(n,this.min,this.max),this.speedMult=e}step(n,e=1){e===0?this.setValue(this.current+n):(this.mode!==2&&(this.target=this.current),this.goto(this.target+n,e))}roll(n=!1,e=1){this.mode=1,this.target=n?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(n){return this.target=this.wrap?Fi(n,this.max):qe.clamp(n,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(n){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const i=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=i&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+n/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-n/1e3*this.speed*this.speedMult*2));let t=null;return this.current>this.target&&this.currentSpeed?t=Math.max(this.target,this.current+this.currentSpeed*n/1e3):this.current<this.target&&this.currentSpeed&&(t=Math.min(this.target,this.current+this.currentSpeed*n/1e3)),t!==null&&(t=this.wrap?Fi(t,this.max):qe.clamp(t,this.min,this.max),t!==this.current)?(this.current=t,this.fn&&this.fn(this.current),!0):!1}},pl=class{constructor(n,e){this.fn=n,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((n,[e,t])=>(n[e]=t.current,n),{})}setSpeed(n){for(const e of Object.values(this.dynamics))e.setSpeed(n)}goto(n,e=1){for(const[t,i]of Object.entries(n))this.dynamics[t].goto(i,e)}step(n,e=1){if(e===0)this.setValue(Object.keys(n).reduce((t,i)=>(t[i]=n[i]+this.dynamics[i].current,t),{}));else for(const[t,i]of Object.entries(n))this.dynamics[t].step(i,e)}roll(n,e=1){for(const[t,i]of Object.entries(n))this.dynamics[t].roll(i,e)}stop(){for(const n of Object.values(this.dynamics))n.stop()}setValue(n){let e=!1;for(const[t,i]of Object.entries(n))e=this.dynamics[t].setValue(i)||e;return e&&this.fn&&this.fn(this.current),e}update(n){let e=!1;for(const t of Object.values(this.dynamics))e=t.update(n)||e;return e&&this.fn&&this.fn(this.current),e}},Wr=class{constructor(n=200){this.delay=n,this.time=0,this.delay=n}get pending(){return this.time!==0}down(n){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=n}up(n){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{n(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(n(this.data),this.time=0,this.data=void 0)}},ml=(n=>(n.VERTICAL="VERTICAL",n.HORIZONTAL="HORIZONTAL",n))(ml||{}),_l=class{constructor(n,e,t){this.container=n,this.direction=e,this.listener=t,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(n){switch(n.type){case"click":n.stopPropagation();break;case"mousedown":this.__onMouseDown(n);break;case"mouseenter":this.__onMouseEnter(n);break;case"mouseleave":this.__onMouseLeave(n);break;case"touchstart":this.__onTouchStart(n);break;case"mousemove":this.__onMouseMove(n);break;case"touchmove":this.__onTouchMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchend":this.__onTouchEnd(n);break}}__onMouseDown(n){this.mousedown=!0,this.__update(n.clientX,n.clientY,!0)}__onMouseEnter(n){this.mouseover=!0,this.__update(n.clientX,n.clientY,!0)}__onTouchStart(n){this.mouseover=!0,this.mousedown=!0;const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(n){(this.mousedown||this.mouseover)&&(n.stopPropagation(),this.__update(n.clientX,n.clientY,!0))}__onTouchMove(n){if(this.mousedown||this.mouseover){n.stopPropagation();const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(n){this.mousedown&&(this.mousedown=!1,this.__update(n.clientX,n.clientY,!1))}__onMouseLeave(n){this.mouseover&&(this.mouseover=!1,this.__update(n.clientX,n.clientY,!0))}__onTouchEnd(n){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(n,e,t){const i=this.container.getBoundingClientRect();let r;this.isVertical?r=qe.clamp((i.bottom-e)/i.height,0,1):r=qe.clamp((n-i.left)/i.width,0,1),this.listener({value:r,click:!t,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:n,clientY:e}})}},C_={};Xs(C_,{BeforeAnimateEvent:()=>Qs,BeforeRenderEvent:()=>Ni,BeforeRotateEvent:()=>yl,ClickEvent:()=>Al,ConfigChangedEvent:()=>It,DoubleClickEvent:()=>Dl,FullscreenEvent:()=>Oi,HideNotificationEvent:()=>Bi,HideOverlayEvent:()=>zl,HidePanelEvent:()=>Un,HideTooltipEvent:()=>Wl,KeypressEvent:()=>Fn,LoadProgressEvent:()=>jl,ObjectEnterEvent:()=>Uc,ObjectEvent:()=>Xr,ObjectHoverEvent:()=>zc,ObjectLeaveEvent:()=>Fs,PanoramaErrorEvent:()=>ic,PanoramaLoadEvent:()=>Jl,PanoramaLoadedEvent:()=>_i,PositionUpdatedEvent:()=>zi,ReadyEvent:()=>Hi,RenderEvent:()=>mc,RollUpdatedEvent:()=>Gi,ShowNotificationEvent:()=>Vi,ShowOverlayEvent:()=>Mc,ShowPanelEvent:()=>Nn,ShowTooltipEvent:()=>bc,SizeUpdatedEvent:()=>ki,StopAllEvent:()=>Wi,TransitionDoneEvent:()=>ac,ViewerEvent:()=>Ze,ZoomUpdatedEvent:()=>En});var R_=class extends Event{constructor(n,e=!1){super(n,{cancelable:e})}},gl=class extends EventTarget{dispatchEvent(n){return super.dispatchEvent(n)}addEventListener(n,e,t){super.addEventListener(n,e,t)}removeEventListener(n,e,t){super.removeEventListener(n,e,t)}},Ze=class extends R_{},vl=class xl extends Ze{constructor(e,t){super(xl.type,!0),this.position=e,this.zoomLevel=t}};vl.type="before-animate";var Qs=vl,Ml=class Sl extends Ze{constructor(e,t){super(Sl.type),this.timestamp=e,this.elapsed=t}};Ml.type="before-render";var Ni=Ml,El=class Tl extends Ze{constructor(e){super(Tl.type,!0),this.position=e}};El.type="before-rotate";var yl=El,bl=class wl extends Ze{constructor(e){super(wl.type),this.data=e}};bl.type="click";var Al=bl,Cl=class Rl extends Ze{constructor(e){super(Rl.type),this.options=e}containsOptions(...e){return e.some(t=>this.options.includes(t))}};Cl.type="config-changed";var It=Cl,Pl=class Ll extends Ze{constructor(e){super(Ll.type),this.data=e}};Pl.type="dblclick";var Dl=Pl,Il=class Ul extends Ze{constructor(e){super(Ul.type),this.fullscreenEnabled=e}};Il.type="fullscreen";var Oi=Il,Fl=class Nl extends Ze{constructor(e){super(Nl.type),this.notificationId=e}};Fl.type="hide-notification";var Bi=Fl,Ol=class Bl extends Ze{constructor(e){super(Bl.type),this.overlayId=e}};Ol.type="hide-overlay";var zl=Ol,Gl=class Hl extends Ze{constructor(e){super(Hl.type),this.panelId=e}};Gl.type="hide-panel";var Un=Gl,Vl=class kl extends Ze{constructor(e){super(kl.type),this.tooltipData=e}};Vl.type="hide-tooltip";var Wl=Vl,Xl=class ql extends Ze{constructor(e,t){super(ql.type,!0),this.key=e,this.originalEvent=t}matches(e){return Ys(this.originalEvent,e)}};Xl.type="key-press";var Fn=Xl,Yl=class Zl extends Ze{constructor(e){super(Zl.type),this.progress=e}};Yl.type="load-progress";var jl=Yl,Kl=class $l extends Ze{constructor(e){super($l.type),this.panorama=e}};Kl.type="panorama-load";var Jl=Kl,Ql=class ec extends Ze{constructor(e){super(ec.type),this.data=e}};Ql.type="panorama-loaded";var _i=Ql,tc=class nc extends Ze{constructor(e,t){super(nc.type),this.panorama=e,this.error=t}};tc.type="panorama-error";var ic=tc,rc=class sc extends Ze{constructor(e){super(sc.type),this.completed=e}};rc.type="transition-done";var ac=rc,oc=class lc extends Ze{constructor(e){super(lc.type),this.position=e}};oc.type="position-updated";var zi=oc,cc=class hc extends Ze{constructor(e){super(hc.type),this.roll=e}};cc.type="roll-updated";var Gi=cc,dc=class uc extends Ze{constructor(){super(uc.type)}};dc.type="ready";var Hi=dc,fc=class pc extends Ze{constructor(){super(pc.type)}};fc.type="render";var mc=fc,_c=class gc extends Ze{constructor(e){super(gc.type),this.notificationId=e}};_c.type="show-notification";var Vi=_c,vc=class xc extends Ze{constructor(e){super(xc.type),this.overlayId=e}};vc.type="show-overlay";var Mc=vc,Sc=class Ec extends Ze{constructor(e){super(Ec.type),this.panelId=e}};Sc.type="show-panel";var Nn=Sc,Tc=class yc extends Ze{constructor(e,t){super(yc.type),this.tooltip=e,this.tooltipData=t}};Tc.type="show-tooltip";var bc=Tc,wc=class Ac extends Ze{constructor(e){super(Ac.type),this.size=e}};wc.type="size-updated";var ki=wc,Cc=class Rc extends Ze{constructor(){super(Rc.type)}};Cc.type="stop-all";var Wi=Cc,Pc=class Lc extends Ze{constructor(e){super(Lc.type),this.zoomLevel=e}};Pc.type="zoom-updated";var En=Pc,Xr=class extends Ze{constructor(n,e,t,i,r){super(n),this.originalEvent=e,this.object=t,this.viewerPoint=i,this.userDataKey=r}},Dc=class Ic extends Xr{constructor(e,t,i,r){super(Ic.type,e,t,i,r)}};Dc.type="enter-object";var Uc=Dc,Fc=class Nc extends Xr{constructor(e,t,i,r){super(Nc.type,e,t,i,r)}};Fc.type="leave-object";var Fs=Fc,Oc=class Bc extends Xr{constructor(e,t,i,r){super(Bc.type,e,t,i,r)}};Oc.type="hover-object";var zc=Oc,ea=class{constructor(n){this.viewer=n}init(){}destroy(){}supportsTransition(n){return!1}supportsPreload(n){return!1}textureCoordsToSphericalCoords(n,e){throw new Ye("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(n,e){throw new Ye("Current adapter does not support texture coordinates.")}};ea.supportsDownload=!1;function go(n){if(n){for(const[,e]of[["_",n],...Object.entries(n)])if(e.prototype instanceof ea)return Js(e.id,e.VERSION,"5.14.3"),e}return null}var Pi=`${Bn}_touchSupport`,Dt={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=D_(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const n=P_();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!n,this.maxTextureWidth=n?n.getParameter(n.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=L_(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!Dt.isWebGLSupported)throw new Ye("WebGL 2 is not supported.");if(Dt.maxTextureWidth===0)throw new Ye("Unable to detect system capabilities")}};function P_(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function L_(){let n="ontouchstart"in window||navigator.maxTouchPoints>0;Pi in localStorage&&(n=localStorage[Pi]==="true");const e=new Promise(t=>{const i=()=>{window.removeEventListener("mousedown",r),window.removeEventListener("touchstart",s),clearTimeout(o)},r=()=>{i(),localStorage[Pi]=!1,t(!1)},s=()=>{i(),localStorage[Pi]=!0,t(!0)},a=()=>{i(),localStorage[Pi]=n,t(n)};window.addEventListener("mousedown",r,!1),window.addEventListener("touchstart",s,!1);const o=setTimeout(a,1e4)});return{initial:n,promise:e}}function D_(n){let e=n,t=!1;const i=document.createElement("canvas"),r=i.getContext("2d");for(i.width=1,i.height=1;e>1024&&!t;){const s=document.createElement("canvas"),a=s.getContext("2d");s.width=e,s.height=e/2;try{a.fillStyle="white",a.fillRect(e-1,e/2-1,1,1),r.drawImage(s,e-1,e/2-1,1,1,0,0,1,1),r.getImageData(0,0,1,1).data[0]>0&&(t=!0)}catch{}s.width=0,s.height=0,t||(e/=2)}if(t)return e;throw new Ye("Unable to detect system capabilities")}var I_=`varying vec3 vWorldPos;
uniform sampler2D map;
uniform float opacity;
uniform vec2 uvOffset;
uniform vec2 uvScale;
uniform float radius;

const float PI = 3.1415926535897932384626433832795;

// Analytic edge antialiasing across one screen-space pixel at the
// cropped-region boundary on a single axis (replaces the MSAA the standard
// adapter gets from rasterizing arc-restricted geometry).
float edgeAlpha(float coord) {
    float dist = min(coord, 1.0 - coord);
    return clamp(dist / fwidth(coord) + 0.5, 0.0, 1.0);
}

void main() {
    // Ray-cast the true sphere from the camera through the (interpolated, on
    // the polygon chord) world position, and use the exit-point direction for
    // sampling. This makes the result independent of mesh tessellation even
    // when the camera is offset from the sphere center (e.g. fisheye config).
    vec3 rayDir = vWorldPos - cameraPosition;
    float a = dot(rayDir, rayDir);
    float b = dot(cameraPosition, rayDir);
    float c = dot(cameraPosition, cameraPosition) - radius * radius;
    float t = (-b + sqrt(max(b * b - a * c, 0.0))) / a;
    vec3 dir = (cameraPosition + t * rayDir) / radius;

    float u = atan(-dir.x, dir.z) / (2.0 * PI) + 0.5;
    float v = asin(clamp(dir.y, -1.0, 1.0)) / PI + 0.5;
    vec2 uv = (vec2(u, v) - uvOffset) / uvScale;

    float alpha = 1.0;
    if (uvScale.x < 1.0) alpha = min(alpha, edgeAlpha(uv.x));
    if (uvScale.y < 1.0) alpha = min(alpha, edgeAlpha(uv.y));
    if (alpha <= 0.0) discard;

    gl_FragColor = texture2D(map, uv);
    gl_FragColor.a *= opacity * alpha;
}
`,U_=`varying vec3 vWorldPos;

void main() {
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,F_=kr({shader:!1,resolution:64,useXmpData:!0,blur:!1},{resolution:n=>{if(!n||!qe.isPowerOfTwo(n))throw new Ye("EquirectangularAdapter resolution must be power of two.");return n}}),qr=class Gc extends ea{static withConfig(e){return[Gc,e]}constructor(e,t){super(e),this.config=F_(t),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(e,t){if(Tt(e.textureX)||Tt(e.textureY))throw new Ye("Texture position is missing 'textureX' or 'textureY'");const i=(e.textureX+t.croppedX)/t.fullWidth*Math.PI*2,r=(e.textureY+t.croppedY)/t.fullHeight*Math.PI;return{yaw:i>=Math.PI?i-Math.PI:i+Math.PI,pitch:Math.PI/2-r}}sphericalCoordsToTextureCoords(e,t){const i=e.yaw/Math.PI/2*t.fullWidth,r=e.pitch/Math.PI*t.fullHeight;let s=Math.round(e.yaw<Math.PI?i+t.fullWidth/2:i-t.fullWidth/2)-t.croppedX,a=Math.round(t.fullHeight/2-r)-t.croppedY;return(s<0||s>t.croppedWidth||a<0||a>t.croppedHeight)&&(s=a=void 0),{textureX:s,textureY:a}}async loadTexture(e,t=!0,i,r=this.config.useXmpData){if(typeof e!="string"&&(typeof e!="object"||!e.path))return Promise.reject(new Ye("Invalid panorama url, are you using the right adapter?"));let s;typeof e=="string"?s={path:e,data:i}:s={data:i,...e};const a=await this.viewer.textureLoader.loadFile(s.path,t?u=>this.viewer.textureLoader.dispatchProgress(u):null,s.path),o=r?await this.loadXMP(a):null,c=await this.viewer.textureLoader.blobToImage(a);typeof s.data=="function"&&(s.data=s.data(c,o));const l=fl(c.width,c.height,s.data,o),d=this.createEquirectangularTexture(c);return{panorama:e,texture:d,panoData:l,cacheKey:s.path}}async loadXMP(e){const t=await this.loadBlobAsString(e),i=t.indexOf("<x:xmpmeta");if(i===-1)return null;const r=t.indexOf("</x:xmpmeta>",i);if(r===-1)return null;const s=t.substring(i,r);return s.includes("GPano:")?{fullWidth:Bt(s,"FullPanoWidthPixels"),fullHeight:Bt(s,"FullPanoHeightPixels"),croppedWidth:Bt(s,"CroppedAreaImageWidthPixels"),croppedHeight:Bt(s,"CroppedAreaImageHeightPixels"),croppedX:Bt(s,"CroppedAreaLeftPixels"),croppedY:Bt(s,"CroppedAreaTopPixels"),poseHeading:Bt(s,"PoseHeadingDegrees",!1),posePitch:Bt(s,"PosePitchDegrees",!1),poseRoll:Bt(s,"PoseRollDegrees",!1),initialHeading:Bt(s,"InitialViewHeadingDegrees",!1),initialPitch:Bt(s,"InitialViewPitchDegrees",!1),initialFov:Bt(s,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(e){return new Promise((t,i)=>{const r=new FileReader;r.onload=()=>t(r.result),r.onerror=i,r.readAsText(e)})}createEquirectangularTexture(e){if(this.config.blur||e.width>Dt.maxTextureWidth){const t=Math.min(1,Dt.maxCanvasWidth/e.width),i=new OffscreenCanvas(Math.floor(e.width*t),Math.floor(e.height*t)),r=i.getContext("2d");return this.config.blur&&(r.filter=`blur(${i.width/2048}px)`),r.drawImage(e,0,0,i.width,i.height),Is(i)}return Is(e)}createMesh(e){if(this.config.shader){const t=new vi(Sn,32,16).scale(-1,1,1),i={map:{value:null},opacity:{value:1},radius:{value:Sn},uvOffset:{value:new Xe(e.croppedX/e.fullWidth,(e.fullHeight-e.croppedY-e.croppedHeight)/e.fullHeight)},uvScale:{value:new Xe(e.croppedWidth/e.fullWidth,e.croppedHeight/e.fullHeight)}},r=new en({uniforms:i,vertexShader:U_,fragmentShader:I_,depthTest:!1,depthWrite:!1,transparent:!0});return new Ht(t,r)}else{const t=e.croppedX/e.fullWidth*2*Math.PI,i=e.croppedWidth/e.fullWidth*2*Math.PI,r=e.croppedY/e.fullHeight*Math.PI,s=e.croppedHeight/e.fullHeight*Math.PI,a=new vi(Sn,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*i),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*s),-Math.PI/2+t,i,r,s).scale(-1,1,1),o=new ji({depthTest:!1,depthWrite:!1});return new Ht(a,o)}}setTexture(e,t){this.config.shader?e.material.uniforms.map.value=t.texture:e.material.map=t.texture}setTextureOpacity(e,t){this.config.shader?e.material.uniforms.opacity.value=t:(e.material.opacity=t,e.material.transparent=t<1)}disposeTexture({texture:e}){e.dispose()}disposeMesh(e){e.geometry.dispose(),e.material.dispose()}};qr.id="equirectangular";qr.VERSION="5.14.3";qr.supportsDownload=!0;var Hc=qr,Vc=class kc extends Hc{static withConfig(e){return[kc,e]}constructor(e,t){super(e,{resolution:t?.resolution??64,useXmpData:!1})}async loadTexture(e,t){const i=await super.loadTexture(e,t,null,!1);return i.panoData=null,i}createMesh(){const e=new vi(Sn,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),t=e.getAttribute("uv"),i=e.getAttribute("normal");for(let s=0;s<t.count;s++)for(let a=0;a<3;a++){const o=s*3+a,c=i.getX(o),l=i.getY(o),d=i.getZ(o),u=.947;if(s<t.count/6){const h=c===0&&d===0?1:Math.acos(l)/Math.sqrt(c*c+d*d)*(2/Math.PI);t.setXY(o,c*(u/4)*h+1/4,d*(u/2)*h+1/2)}else{const h=c===0&&d===0?1:Math.acos(-l)/Math.sqrt(c*c+d*d)*(2/Math.PI);t.setXY(o,-c*(u/4)*h+3/4,d*(u/2)*h+1/2)}}e.rotateX(-Math.PI/2),e.rotateY(Math.PI);const r=new ji({depthTest:!1,depthWrite:!1});return new Ht(e,r)}};Vc.id="dual-fisheye";Vc.VERSION="5.14.3";var Zn=class Wc{constructor(e,t){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof Wc?e.viewer:e,this.container=document.createElement(t.tagName??"div"),this.container.className=t.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(t=>t.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},N_=kr({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),zt=class extends Zn{constructor(n,e){super(n,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=N_(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",t=>{this.state.enabled&&this.onClick(),t.stopPropagation()}),this.container.addEventListener("keydown",t=>{t.key===Et.Enter&&this.state.enabled&&(this.onClick(),t.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(n=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),n&&this.viewer.navbar.autoSize())}hide(n=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",n&&this.viewer.navbar.autoSize())}checkSupported(){js(this.isSupported(),(n,e)=>{this.state&&(this.state.supported=n,e?n||this.hide():this.toggle(n))})}autoSize(){}isSupported(){return!0}toggleActive(n=!this.state.active){n!==this.state.active&&(this.state.active=n,Gr(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(n){this.container.innerHTML=n,qs(this.container.querySelector("svg"),"psv-button-svg")}},O_=class extends zt{constructor(n,e){super(n,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",e.content.attachViewer?.(this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){this.customOnClick?.(this.viewer)}},Zi=class extends zt{constructor(n){super(n,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:tn.info}),this.mode=0,this.viewer.addEventListener(Bi.type,this),this.viewer.addEventListener(Vi.type,this),this.viewer.addEventListener(Un.type,this),this.viewer.addEventListener(Nn.type,this),this.viewer.addEventListener(It.type,this)}destroy(){this.viewer.removeEventListener(Bi.type,this),this.viewer.removeEventListener(Vi.type,this),this.viewer.removeEventListener(Un.type,this),this.viewer.removeEventListener(Nn.type,this),this.viewer.removeEventListener(It.type,this),super.destroy()}handleEvent(n){if(n instanceof It){n.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;n instanceof Bi?e=this.mode===1:n instanceof Vi?e=this.mode===1&&n.notificationId!==yt.DESCRIPTION:n instanceof Un?e=this.mode===2:n instanceof Nn&&(e=this.mode===2&&n.panelId!==yt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(n){super.hide(n),this.mode&&this.__close()}autoSize(n=!1){if(n){const e=this.viewer.navbar.getButton("caption",!1),t=e&&!e.isVisible(),i=!!this.viewer.config.description;t||i?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(yt.DESCRIPTION);break;case 2:this.viewer.panel.hide(yt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:yt.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:yt.DESCRIPTION,content:this.viewer.config.caption}))}};Zi.id="description";var Xc=class extends zt{constructor(n){super(n,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:tn.download}),this.viewer.addEventListener(It.type,this),this.viewer.addEventListener(_i.type,this)}destroy(){this.viewer.removeEventListener(It.type,this),this.viewer.removeEventListener(_i.type,this),super.destroy()}handleEvent(n){n instanceof It?(n.containsOptions("downloadUrl")&&this.checkSupported(),n.containsOptions("downloadUrl","downloadName")&&this.__update()):n instanceof _i&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const n=this.container;n.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,n.target="_blank",n.href.startsWith("data:")&&!this.viewer.config.downloadName?n.download="panorama."+n.href.substring(0,n.href.indexOf(";")).split("/").pop():n.download=this.viewer.config.downloadName||n.href.split("/").pop()}};Xc.id="download";var qc=class extends zt{constructor(n){super(n,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:tn.fullscreenIn,iconActive:tn.fullscreenOut}),this.viewer.addEventListener(Oi.type,this)}destroy(){this.viewer.removeEventListener(Oi.type,this),super.destroy()}handleEvent(n){n instanceof Oi&&this.toggleActive(n.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};qc.id="fullscreen";var B_="psvButton",z_=(n,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${tn.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${n.map(t=>`
    <li data-psv-button="${t.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${t.content}</span>
      <span class="psv-panel-menu-item-label">${t.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,Ar=class extends zt{constructor(n){super(n,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:tn.menu}),this.viewer.addEventListener(Nn.type,this),this.viewer.addEventListener(Un.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Nn.type,this),this.viewer.removeEventListener(Un.type,this),super.destroy()}handleEvent(n){n instanceof Nn?this.toggleActive(n.panelId===yt.MENU):n instanceof Un&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(n){super.hide(n),this.__hideMenu()}show(n){super.show(n),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:yt.MENU,content:z_(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:n=>{const e=n?$o(n,".psv-panel-menu-item"):void 0,t=e?e.dataset[B_]:void 0;t&&(this.viewer.navbar.getButton(t).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(yt.MENU)}};Ar.id="menu";function G_(n){let e;switch(n){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return tn.arrow.replace("rotate(0",`rotate(${e}`)}var Ji=class extends zt{constructor(n,e){super(n,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:G_(e)}),this.direction=e,this.handler=new Wr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":n.key===Et.Enter&&this.__onMouseDown();break;case"keyup":n.key===Et.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Vr(Dt.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const n={};switch(this.direction){case 0:n.pitch=!1;break;case 1:n.pitch=!0;break;case 3:n.yaw=!1;break;default:n.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(n),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Ji.groupId="move";var Yc=class extends Ji{constructor(n){super(n,1)}};Yc.id="moveDown";var Zc=class extends Ji{constructor(n){super(n,2)}};Zc.id="moveLeft";var jc=class extends Ji{constructor(n){super(n,3)}};jc.id="moveRight";var Kc=class extends Ji{constructor(n){super(n,0)}};Kc.id="moveUp";var ta=class extends zt{constructor(n,e,t){super(n,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=t,this.handler=new Wr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":n.key===Et.Enter&&this.__onMouseDown();break;case"keyup":n.key===Et.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Vr(Dt.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};ta.groupId="zoom";var $c=class extends ta{constructor(n){super(n,tn.zoomIn,0)}};$c.id="zoomIn";var Jc=class extends ta{constructor(n){super(n,tn.zoomOut,1)}};Jc.id="zoomOut";var na=class extends zt{constructor(n){super(n,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new _l(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(hn(this.container,"max-width"),10),this.viewer.addEventListener(En.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(Hi.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(En.type,this),this.viewer.removeEventListener(Hi.type,this),super.destroy()}handleEvent(n){n instanceof En?this.__moveZoomValue(n.zoomLevel):n instanceof Hi&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return Vr(Dt.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(n){this.zoomValue.style.left=n/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(n){n.mousedown&&this.viewer.zoom(n.value*100)}};na.id="zoomRange";na.groupId="zoom";var Qc=class extends gl{constructor(n){super(),this.viewer=n}init(){}destroy(){}},H_=class extends Qc{constructor(n,e){super(n),this.config=this.constructor.configParser(e)}setOption(n,e){this.setOptions({[n]:e})}setOptions(n){const e={...this.config,...n},t=this.constructor,i=t.configParser,r=t.readonlyOptions,s=t.id;for(let[a,o]of Object.entries(n)){if(!(a in i.defaults)){bt(`${s}: Unknown option "${a}"`);continue}if(r.includes(a)){bt(`${s}: Option "${a}" cannot be updated`);continue}a in i.parsers&&(o=i.parsers[a](o,{rawConfig:e,defValue:i.defaults[a]})),this.config[a]=o}}};H_.readonlyOptions=[];function Ns(n){if(n){for(const[,e]of[["_",n],...Object.entries(n)])if(e.prototype instanceof Qc)return Js(e.id,e.VERSION,"5.14.3"),e}return null}var Mi={panorama:null,container:null,adapter:[Hc,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[Et.ArrowUp]:"ROTATE_UP",[Et.ArrowDown]:"ROTATE_DOWN",[Et.ArrowRight]:"ROTATE_RIGHT",[Et.ArrowLeft]:"ROTATE_LEFT",[Et.PageUp]:"ZOOM_IN",[Et.PageDown]:"ZOOM_OUT",[Et.Plus]:"ZOOM_IN",[Et.Minus]:"ZOOM_OUT"}},vo={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},Os={container:n=>{if(!n)throw new Ye("No value given for container.");return n},adapter:(n,{defValue:e})=>{if(n?Array.isArray(n)?n=[go(n[0]),n[1]]:n=[go(n),null]:n=e,!n[0])throw new Ye("An undefined value was given for adapter.");if(!n[0].id)throw new Ye("Adapter has no id.");return n},defaultYaw:n=>ln(n),defaultPitch:n=>ln(n,!0),defaultZoomLvl:n=>qe.clamp(n,0,100),minFov:(n,{rawConfig:e})=>(e.maxFov<n&&(bt("maxFov cannot be lower than minFov"),n=e.maxFov),qe.clamp(n,1,179)),maxFov:(n,{rawConfig:e})=>(n<e.minFov&&(n=e.minFov),qe.clamp(n,1,179)),moveInertia:(n,{defValue:e})=>n===!0?e:n===!1?0:n,lang:n=>({...Mi.lang,...n}),fisheye:n=>n===!0?1:n===!1?0:qe.clamp(n,0,2),requestHeaders:n=>n&&typeof n=="object"?()=>n:typeof n=="function"?n:null,withCredentials:n=>typeof n=="boolean"?()=>n:typeof n=="function"?n:()=>!1,defaultTransition:(n,{defValue:e})=>n===null||n.speed===0?null:{...e,...n},rendererParameters:(n,{defValue:e})=>({...n,...e}),plugins:n=>n.map((e,t)=>{if(Array.isArray(e)?e=[Ns(e[0]),e[1]]:e=[Ns(e),null],!e[0])throw new Ye(`An undefined value was given for plugin ${t}.`);if(!e[0].id)throw new Ye(`Plugin ${t} has no id.`);return e}),navbar:n=>n===!1?null:n===!0?Hr(Mi.navbar):typeof n=="string"?n.split(/[ ,]/):n},V_=kr(Mi,Os),pi=class extends zt{constructor(n){super(n,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(n){this.show(),this.contentElt.innerHTML=n??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){this.viewer.navbar.getButton(Zi.id,!1)?.autoSize(!0)}};pi.id="caption";var Bs={},Ur={};function k_(n,e){if(!n.id)throw new Ye("Button id is required");Bs[n.id]=n,n.groupId&&(Ur[n.groupId]=Ur[n.groupId]||[]).push(n)}[Jc,na,$c,Zi,pi,Xc,qc,Zc,jc,Kc,Yc].forEach(n=>k_(n));var W_=class extends Zn{constructor(n){super(n,{className:`psv-navbar ${$i}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(n){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,n.indexOf(pi.id)!==-1&&n.indexOf(Zi.id)===-1&&n.splice(n.indexOf(pi.id),0,Zi.id),n.forEach(e=>{typeof e=="object"?new O_(this,e):Bs[e]?new Bs[e](this):Ur[e]?Ur[e].forEach(t=>{new t(this)}):bt(`Unknown button ${e}`)}),new Ar(this),this.children.forEach(e=>{e instanceof zt&&e.checkSupported()}),this.autoSize()}setCaption(n){this.children.some(e=>e instanceof pi?(e.setCaption(n),!0):!1)}getButton(n,e=!0){const t=this.children.find(i=>i instanceof zt&&i.id===n);return!t&&e&&bt(`button "${n}" not found in the navbar`),t}focusButton(n){this.isVisible()&&(this.getButton(n,!1)?.container||this.container.firstElementChild)?.focus()}autoSize(){this.children.forEach(i=>{i instanceof zt&&i.autoSize()});const n=this.container.offsetWidth;let e=0;const t=[];this.children.forEach(i=>{i.isVisible()&&i instanceof zt&&(e+=i.width,i.collapsable&&t.push(i))}),e!==0&&(n<e&&t.length>0?(t.forEach(i=>i.collapse()),this.collapsed=t,this.getButton(Ar.id).show(!1)):n>=e&&this.collapsed.length>0&&(this.collapsed.forEach(i=>i.uncollapse()),this.collapsed=[],this.getButton(Ar.id).hide(!1)),this.getButton(pi.id,!1)?.autoSize())}};In.enabled=!1;var ui={enabled:!0,maxItems:10,ttl:600,items:{},purgeInterval:null,init(){In.enabled&&(bt("ThreeJS cache should be disabled"),In.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(n,e,t){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[n]=t,this.items[e].lastAccess=Date.now())},get(n,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[n]},remove(n,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[n],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,n],[,e])=>e.lastAccess-n.lastAccess).forEach(([n,{lastAccess:e}],t)=>{t>0&&(Date.now()-e>=this.ttl*1e3||t>=this.maxItems)&&delete this.items[n]})}},X_=class extends Zn{constructor(n){super(n,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=hn(this.loader,"color"),this.color=hn(this.canvas,"color"),this.border=parseInt(hn(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(hn(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(It.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(It.type,this),super.destroy()}handleEvent(n){n instanceof It&&n.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(n){this.container.classList.remove("psv-loader--undefined");const e=qe.clamp(n,0,99.999)/100*Math.PI*2,t=this.size/2,i=t,r=this.thickness/2+this.border,s=(this.size-this.thickness)/2-this.border,a=Math.sin(e)*s+t,o=-Math.cos(e)*s+t,c=n>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${i} ${r} A ${s} ${s} 0 ${c} 1 ${a} ${o}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const n=this.loader.querySelector(".psv-loader-image, .psv-loader-text");n&&this.loader.removeChild(n);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const t=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=t+"px",e.style.maxHeight=t+"px",this.loader.appendChild(e)}}},q_=class extends Zn{constructor(n){super(n,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new Ye("Notification cannot be toggled")}show(n){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof n=="string"&&(n={content:n}),this.state.contentId=n.id||null,this.content.innerHTML=n.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new Vi(this.state.contentId)),n.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),n.timeout))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new Bi(e))}}},Y_=class extends Zn{constructor(n){super(n,{className:`psv-overlay ${$i}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(Fn.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Fn.type,this),super.destroy()}handleEvent(n){n.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),n.stopPropagation()):n instanceof Fn&&this.isVisible()&&this.state.dismissible&&n.matches(Et.Escape)&&(this.hide(),n.preventDefault())}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new Ye("Overlay cannot be toggled")}show(n){typeof n=="string"&&(n={title:n}),this.state.contentId=n.id||null,this.state.dismissible=n.dismissible!==!1,this.image.innerHTML=n.image||"",this.title.innerHTML=n.title||"",this.text.innerHTML=n.text||"",super.show(),this.viewer.dispatchEvent(new Mc(this.state.contentId))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new zl(e))}}},Z_=200,ys="psv-panel-content--no-interaction",j_=class extends Zn{constructor(n){super(n,{className:`psv-panel ${$i}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const t=document.createElement("div");t.className="psv-panel-close-button",t.innerHTML=tn.close,t.title=n.config.lang.close,this.container.appendChild(t),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),t.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(Fn.type,this)}destroy(){this.viewer.removeEventListener(Fn.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown(n);break;case"touchstart":this.__onTouchStart(n);break;case"mousemove":this.__onMouseMove(n);break;case"touchmove":this.__onTouchMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchend":this.__onTouchEnd(n);break;case Fn.type:this.__onKeyPress(n);break}}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new Ye("Panel cannot be toggled")}show(n){typeof n=="string"&&(n={content:n});const e=this.isVisible(n.id);this.state.contentId=n.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),n.id&&this.state.width[n.id]?this.container.style.width=this.state.width[n.id]:n.width?this.container.style.width=n.width:this.container.style.width=null,this.content.innerHTML=n.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Gr(this.content,"psv-panel-content--no-margin",n.noMargin===!0),n.clickHandler&&(this.state.clickHandler=t=>{n.clickHandler(Rr(t))},this.state.keyHandler=t=>{t.key===Et.Enter&&n.clickHandler(Rr(t))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{this.content.querySelector("a,button,[tabindex]")?.focus()},300)),this.viewer.dispatchEvent(new Nn(this.state.contentId))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new Un(e))}}__onMouseDown(n){n.stopPropagation(),this.__startResize(n.clientX,n.clientY)}__onTouchStart(n){if(n.stopPropagation(),n.touches.length===1){const e=n.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(n){this.state.mousedown&&(n.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(ys))}__onTouchEnd(n){this.state.mousedown&&(n.stopPropagation(),n.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(ys)))}__onMouseMove(n){this.state.mousedown&&(n.stopPropagation(),this.__resize(n.clientX,n.clientY))}__onTouchMove(n){if(this.state.mousedown){const e=n.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(n){this.isVisible()&&n.matches(Et.Escape)&&(this.hide(),n.preventDefault())}__startResize(n,e){this.state.mouseX=n,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(ys)}__resize(n,e){const t=n,i=e,r=Math.max(Z_,this.container.offsetWidth-(t-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=r),this.container.style.width=r,this.state.mouseX=t,this.state.mouseY=i}},K_=class extends Zn{constructor(n,e){super(n,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",t=>t.stopPropagation()),this.container.addEventListener("mousedown",t=>t.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(n){n.type==="transitionend"&&this.__onTransitionEnd(n)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new Ye("Tooltip cannot be toggled")}show(n){if(this.state.state!==0)throw new Ye("Initialized tooltip cannot be re-initialized");n.className&&qs(this.container,n.className),n.style&&Object.assign(this.container.style,n.style),this.state.state=3,this.update(n.content,n),this.state.data=n.data,this.state.state=1,this.viewer.dispatchEvent(new bc(this,this.state.data)),this.__waitImages()}update(n,e){this.content.innerHTML=n;const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.state.arrow=parseInt(hn(this.arrow,"border-top-width"),10),this.state.border=parseInt(hn(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(n){if(this.state.state!==1&&this.state.state!==3)throw new Ye("Uninitialized tooltip cannot be moved");n.box=n.box??this.state.config?.box??{width:0,height:0},this.state.config=n;const e=this.container,t=this.arrow,i={posClass:cl(n.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(i,n);let r=null,s=null;if(i.top<0?r="bottom":i.top+i.height>this.viewer.state.size.height&&(r="top"),i.left<0?s="right":i.left+i.width>this.viewer.state.size.width&&(s="left"),s||r){const o=$s(i.posClass);r&&(i.posClass[o?0:1]=r),s&&(i.posClass[o?1:0]=s),this.__computeTooltipPosition(i,n)}e.style.top=i.top+"px",e.style.left=i.left+"px",t.style.top=i.arrowTop+"px",t.style.left=i.arrowLeft+"px";const a=i.posClass.join("-");a!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=a,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new Wl(this.state.data));const n=parseFloat(hn(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},n*2)}__onTransitionEnd(n){if(n.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(n,e){const t=this.state.arrow,i=e.top,r=n.height,s=e.left,a=n.width,o=t+this.state.border,c=e.box.width/2+t*2,l=e.box.height/2+t*2;switch(n.posClass.join("-")){case"top-left":n.top=i-l-r,n.left=s+o-a,n.arrowTop=r,n.arrowLeft=a-o-t;break;case"top-center":n.top=i-l-r,n.left=s-a/2,n.arrowTop=r,n.arrowLeft=a/2-t;break;case"top-right":n.top=i-l-r,n.left=s-o,n.arrowTop=r,n.arrowLeft=t;break;case"bottom-left":n.top=i+l,n.left=s+o-a,n.arrowTop=-t*2,n.arrowLeft=a-o-t;break;case"bottom-center":n.top=i+l,n.left=s-a/2,n.arrowTop=-t*2,n.arrowLeft=a/2-t;break;case"bottom-right":n.top=i+l,n.left=s-o,n.arrowTop=-t*2,n.arrowLeft=t;break;case"left-top":n.top=i+o-r,n.left=s-c-a,n.arrowTop=r-o-t,n.arrowLeft=a;break;case"center-left":n.top=i-r/2,n.left=s-c-a,n.arrowTop=r/2-t,n.arrowLeft=a;break;case"left-bottom":n.top=i-o,n.left=s-c-a,n.arrowTop=t,n.arrowLeft=a;break;case"right-top":n.top=i+o-r,n.left=s+c,n.arrowTop=r-o-t,n.arrowLeft=-t*2;break;case"center-right":n.top=i-r/2,n.left=s+c,n.arrowTop=r/2-t,n.arrowLeft=-t*2;break;case"right-bottom":n.top=i-o,n.left=s+c,n.arrowTop=t,n.arrowLeft=-t*2;break}}__waitImages(){const n=this.content.querySelectorAll("img");if(n.length>0){const e=[];n.forEach(t=>{t.complete||e.push(new Promise(i=>{t.onload=i,t.onerror=i}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.move(this.state.config)}})}}},$_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Qi=class{constructor(n){this.viewer=n,this.config=n.config,this.state=n.state}destroy(){}},$t=new N,Tr=new On(0,0,0,"ZXY"),J_=class extends Qi{constructor(n){super(n)}fovToZoomLevel(n){const e=Math.round((n-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return qe.clamp(e-2*(e-50),0,100)}zoomLevelToFov(n){return this.config.maxFov+n/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(n){return qe.radToDeg(2*Math.atan(Math.tan(qe.degToRad(n)/2)*this.state.aspect))}hFovToVFov(n){return qe.radToDeg(2*Math.atan(Math.tan(qe.degToRad(n)/2)/this.state.aspect))}getAnimationProperties(n,e,t){const i=!Tt(e),r=!Tt(t),s={};let a=null;if(i){const o=this.viewer.getPosition(),c=Zo(o.yaw,e.yaw);s.yaw={start:o.yaw,end:o.yaw+c},s.pitch={start:o.pitch,end:e.pitch},a=Ds(n,jo(o,e))}if(r){const o=this.viewer.getZoomLevel(),c=Math.abs(t-o);s.zoom={start:o,end:t},a===null&&(a=Ds(n,Math.PI/4*c/100))}return a===null?typeof n=="number"?a=n:a=Rs:a=Math.max(Rs,a),{duration:a,properties:s}}getTransitionOptions(n){let e;const t=this.config.defaultTransition??Mi.defaultTransition;return n.transition===!1||n.transition===null?e=null:n.transition===!0?e={...t}:typeof n.transition=="object"?e={...t,...n.transition}:e=this.config.defaultTransition,e}textureCoordsToSphericalCoords(n){if(!this.state.textureData?.panoData)throw new Ye("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(n,this.state.textureData.panoData);return!Tr.equals(this.viewer.renderer.panoramaPose)||!Tr.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,$t),$t.applyEuler(this.viewer.renderer.panoramaPose),$t.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords($t)):e}sphericalCoordsToTextureCoords(n){if(!this.state.textureData?.panoData)throw new Ye("Current adapter does not support texture coordinates or no texture has been loaded");return(!Tr.equals(this.viewer.renderer.panoramaPose)||!Tr.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(n,$t),Us($t,this.viewer.renderer.sphereCorrection),Us($t,this.viewer.renderer.panoramaPose),n=this.vector3ToSphericalCoords($t)),this.viewer.adapter.sphericalCoordsToTextureCoords(n,this.state.textureData.panoData)}sphericalCoordsToVector3(n,e,t=Sn){return e||(e=new N),e.x=t*-Math.cos(n.pitch)*Math.sin(n.yaw),e.y=t*Math.sin(n.pitch),e.z=t*Math.cos(n.pitch)*Math.cos(n.yaw),e}vector3ToSphericalCoords(n){const e=Math.acos(n.y/Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z)),t=Math.atan2(n.x,n.z);return{yaw:t<0?-t:Math.PI*2-t,pitch:Math.PI/2-e}}viewerCoordsToVector3(n){const e=this.viewer.renderer.getIntersections(n).filter(t=>t.object.userData[Bn]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(n){const e=this.viewerCoordsToVector3(n);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(n){const e=n.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(n){return this.sphericalCoordsToVector3(n,$t),this.vector3ToViewerCoords($t)}isPointVisible(n){let e,t;if(n instanceof N)e=n,t=this.vector3ToViewerCoords(n);else if(Ks(n))e=this.sphericalCoordsToVector3(n,$t),t=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&t.x>=0&&t.x<=this.viewer.state.size.width&&t.y>=0&&t.y<=this.viewer.state.size.height}cleanPosition(n){if("yaw"in n||"pitch"in n){if(!("yaw"in n)||!("pitch"in n))throw new Ye("Position is missing 'yaw' or 'pitch'");return{yaw:ln(n.yaw),pitch:ln(n.pitch,!0)}}else return this.textureCoordsToSphericalCoords(n)}cleanSphereCorrection(n){return{pan:ln(n?.pan||0),tilt:ln(n?.tilt||0,!0),roll:ln(n?.roll||0,!0,!1)}}cleanPanoramaPose(n){return{pan:qe.degToRad(n?.poseHeading||0),tilt:qe.degToRad(n?.posePitch||0),roll:qe.degToRad(n?.poseRoll||0)}}cleanPanoramaOptions(n,e){return e?.isEquirectangular&&(Tt(n.zoom)&&!Tt(e.initialFov)&&(n={...n,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),Tt(n.position)&&!Tt(e.initialHeading)&&!Tt(e.initialPitch)&&(n={...n,position:{yaw:ln(e.initialHeading),pitch:ln(e.initialPitch,!0)}})),n}},Q_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,eg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,Yr=class eh{constructor(){this.$=eh.IDLE}is(...e){return e.some(t=>this.$&t)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};Yr.IDLE=0;Yr.CLICK=1;Yr.MOVING=2;var _t=Yr,tg=class extends Qi{constructor(n){super(n),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new _t,this.keyHandler=new Wr,this.resizeObserver=new ResizeObserver(il(()=>this.viewer.autoSize(),50)),this.moveThreshold=Go*Dt.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(Ni.type,this),this.viewer.addEventListener(Wi.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(Ni.type,this),this.viewer.removeEventListener(Wi.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(n){switch(n.type){case"keydown":this.__onKeyDown(n);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchmove":this.__onTouchMove(n);break;case"touchend":this.__onTouchEnd(n);break;case"fullscreenchange":this.__onFullscreenChange();break;case Ni.type:this.__applyMoveDelta();break;case Wi.type:this.__clearMoveDelta();break}if(!Jo(n,"."+$i))switch(n.type){case"mousedown":this.__onMouseDown(n);break;case"touchstart":this.__onTouchStart(n);break;case"wheel":this.__onMouseWheel(n);break}}__onKeyDown(n){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=n.key===Et.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(yt.CTRL_ZOOM))),!!this.viewer.dispatchEvent(new Fn(n.key,n))&&!(!this.state.keyboardEnabled||!this.config.keyboardActions||this.keyHandler.pending)){for(const[e,t]of Object.entries(this.config.keyboardActions))if(Ys(n,e)){if(typeof t=="function")t(this.viewer,n);else{switch(t!=="ZOOM_IN"&&t!=="ZOOM_OUT"&&this.viewer.stopAll(),t){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(t)}n.preventDefault();return}}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(n=>{n==="ZOOM_IN"||n==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(n){this.step.add(_t.CLICK),this.data.startMouseX=n.clientX,this.data.startMouseY=n.clientY,this.config.mousemove&&n.preventDefault()}__onMouseUp(n){this.step.is(_t.CLICK,_t.MOVING)&&this.__stopMove(n.clientX,n.clientY,n,n.button===2)}__onMouseMove(n){this.config.mousemove&&this.step.is(_t.CLICK,_t.MOVING)&&(n.preventDefault(),this.__doMove(n.clientX,n.clientY)),this.__handleObjectsEvents(n)}__onTouchStart(n){n.touches.length===1?(this.step.add(_t.CLICK),this.data.startMouseX=n.touches[0].clientX,this.data.startMouseY=n.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=n.touches[0];this.__stopMove(e.clientX,e.clientY,n,!0),this.data.longtouchTimeout=null},Vo))):n.touches.length===2&&(this.step.set(_t.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(n),n.preventDefault()))}__onTouchEnd(n){if(this.__cancelLongTouch(),this.step.is(_t.CLICK,_t.MOVING)){if(n.preventDefault(),this.__cancelTwoFingersOverlay(),n.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(n.touches.length===0){const e=n.changedTouches[0];this.__stopMove(e.clientX,e.clientY,n)}}}__onTouchMove(n){if(this.__cancelLongTouch(),!!this.config.mousemove)if(n.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(_t.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:yt.TWO_FINGERS,image:Q_,title:this.config.lang.twoFingers})},ko));else if(this.step.is(_t.CLICK,_t.MOVING)){n.preventDefault();const e=n.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(n),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(yt.TWO_FINGERS))}__onMouseWheel(n){if(!this.config.mousewheel||!n.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:yt.CTRL_ZOOM,image:eg,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(yt.CTRL_ZOOM),Wo);return}n.preventDefault(),n.stopPropagation();const e=n.deltaY/Math.abs(n.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const n=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(n?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new Oi(n))}__resetMove(){this.step.set(_t.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(n){this.viewer.stopAll(),this.__resetMove();const e=Ps(n);this.step.set(_t.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(n,e,t,i=!1){this.step.is(_t.CLICK)&&!this.__moveThresholdReached(n,e)&&this.__doClick(n,e,t,i),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(n,e,t,i=!1){const r=this.viewer.container.getBoundingClientRect(),s=n-r.left,a=e-r.top,o=this.viewer.renderer.getIntersections({x:s,y:a}),c=o.find(l=>l.object.userData[Bn]);if(c){const l=this.viewer.dataHelper.vector3ToSphericalCoords(c.point),d={rightclick:i,originalEvent:t,target:Rr(t),clientX:n,clientY:e,viewerX:s,viewerY:a,yaw:l.yaw,pitch:l.pitch,objects:o.map(u=>u.object).filter(u=>!u.userData[Bn])};try{const u=this.viewer.dataHelper.sphericalCoordsToTextureCoords(d);Object.assign(d,u)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-d.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-d.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new Dl(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new Al(d)),this.data.dblclickData=Hr(d),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},Ho))}}__handleObjectsEvents(n){if(!sl(this.state.objectsObservers)&&n.composedPath().includes(this.viewer.container)){const e=Qo(this.viewer.container),t={x:n.clientX-e.x,y:n.clientY-e.y},i=this.viewer.renderer.getIntersections(t),r=(s,a,o)=>{this.viewer.dispatchEvent(new o(n,s,t,a))};for(const[s,a]of Object.entries(this.state.objectsObservers)){const o=i.find(c=>c.object.userData[s]);o?(a&&o.object!==a&&(r(a,s,Fs),this.state.objectsObservers[s]=null),a?r(o.object,s,zc):(this.state.objectsObservers[s]=o.object,r(o.object,s,Uc))):a&&(r(a,s,Fs),this.state.objectsObservers[s]=null)}}}__doMove(n,e){if(this.step.is(_t.CLICK)&&this.__moveThresholdReached(n,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(_t.MOVING),this.data.mouseX=n,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(_t.MOVING)){const t=(n-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),i=(e-this.data.mouseY)*Math.cos(this.state.roll)+(n-this.data.mouseX)*Math.sin(this.state.roll),r={yaw:this.config.moveSpeed*(t/this.state.size.width)*qe.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(i/this.state.size.height)*qe.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=r.yaw,this.data.moveDelta.pitch+=r.pitch,this.data.mouseX=n,this.data.mouseY=e}}__moveThresholdReached(n,e){return Math.abs(n-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(n){if(this.step.is(_t.MOVING)){n.preventDefault();const e=Ps(n);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/Dt.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};ze.enabled=!1;var yr=new Xe,xo=new pt,Mo=new Ei,ng=class extends Qi{constructor(n){super(n),this.frustumNeedsUpdate=!0,this.renderer=new c_(this.config.rendererParameters),this.renderer.setPixelRatio(Dt.pixelRatio),this.renderer.outputColorSpace=Xi,this.renderer.toneMapping=1,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new Pa,this.camera=new qt(50,16/9,.1,2*Sn),this.camera.matrixAutoUpdate=!1;const e=new Ht(new vi(Sn).scale(-1,1,1),new ji({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[Bn]:!0},this.scene.add(e),this.raycaster=new ud,this.frustum=new ks,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",t=>t.preventDefault()),this.viewer.addEventListener(ki.type,this),this.viewer.addEventListener(En.type,this),this.viewer.addEventListener(zi.type,this),this.viewer.addEventListener(Gi.type,this),this.viewer.addEventListener(It.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(n=>this.__renderLoop(n))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(ki.type,this),this.viewer.removeEventListener(En.type,this),this.viewer.removeEventListener(zi.type,this),this.viewer.removeEventListener(Gi.type,this),this.viewer.removeEventListener(It.type,this),super.destroy()}handleEvent(n){switch(n.type){case ki.type:this.__onSizeUpdated();break;case En.type:this.__onZoomUpdated();break;case zi.type:this.__onPositionUpdated();break;case Gi.type:this.__onPositionUpdated();break;case It.type:n.containsOptions("fisheye")&&this.__onPositionUpdated(),n.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(n){n?this.customRenderer=n(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(n){const e=this.timestamp?n-this.timestamp:0;this.timestamp=n,this.viewer.dispatchEvent(new Ni(n,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new mc))}setTexture(n){this.meshContainer||(this.meshContainer=new fi,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(n.panoData),this.viewer.adapter.setTexture(this.mesh,n,!1),this.meshContainer.add(this.mesh),this.state.textureData=n,this.viewer.needsUpdate()}setPanoramaPose(n,e=this.mesh){const t=this.viewer.dataHelper.cleanPanoramaPose(n);e.rotation.set(-t.tilt,t.pan,t.roll,"YXZ")}setSphereCorrection(n,e=this.meshContainer){const t=this.viewer.dataHelper.cleanSphereCorrection(n);e.rotation.set(t.tilt,t.pan,t.roll,"YXZ")}transition(n,e,t){const i=t.effect==="fade"||t.rotation,r=!Tt(e.position),s=!Tt(e.zoom),a=new Qs(r?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(a);const o=new fi,c=this.viewer.adapter.createMesh(n.panoData);if(this.viewer.adapter.setTexture(c,n,!0),this.viewer.adapter.setTextureOpacity(c,0),this.setPanoramaPose(n.panoData,c),this.setSphereCorrection(e.sphereCorrection,o),r&&!t.rotation){const h=this.viewer.getPosition(),m=new N(0,1,0);o.rotateOnWorldAxis(m,a.position.yaw-h.yaw);const x=new N(0,1,0).cross(this.camera.getWorldDirection(new N)).normalize();o.rotateOnWorldAxis(x,a.position.pitch-h.pitch)}o.add(c),this.scene.add(o),this.renderer.setRenderTarget(new Qt),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:l,properties:d}=this.viewer.dataHelper.getAnimationProperties(t.speed,t.rotation?a.position:null,i?a.zoomLevel:null),u=new Ir({properties:{...d,opacity:{start:0,end:1}},duration:l,easing:"inOutCubic",onTick:h=>{switch(t.effect){case"fade":this.viewer.adapter.setTextureOpacity(c,h.opacity);break;case"black":case"white":h.opacity<.5?this.renderer.toneMappingExposure=t.effect==="black"?qe.mapLinear(h.opacity,0,.5,1,0):qe.mapLinear(h.opacity,0,.5,1,5):(this.renderer.toneMappingExposure=t.effect==="black"?qe.mapLinear(h.opacity,.5,1,0,1):qe.mapLinear(h.opacity,.5,1,5,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(c,1),s&&!i&&this.viewer.dynamics.zoom.setValue(a.zoomLevel));break}r&&t.rotation&&this.viewer.dynamics.position.setValue({yaw:h.yaw,pitch:h.pitch}),s&&i&&this.viewer.dynamics.zoom.setValue(h.zoom),this.viewer.needsUpdate()}});return u.then(h=>{o.remove(c),this.scene.remove(o),h?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=c,this.meshContainer.add(c),this.state.textureData=n,this.setPanoramaPose(n.panoData),this.setSphereCorrection(e.sphereCorrection),r&&!t.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(n),this.viewer.adapter.disposeMesh(c))}),u}getIntersections(n){yr.x=2*n.x/this.state.size.width-1,yr.y=-2*n.y/this.state.size.height+1,this.raycaster.setFromCamera(yr,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(t=>t.object.visible).filter(t=>t.object.isMesh&&!!t.object.userData);return this.customRenderer?.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,yr)),e}isObjectVisible(n){if(!n)return!1;if(this.frustumNeedsUpdate&&(xo.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(xo),this.frustumNeedsUpdate=!1),n.isVector3)return this.frustum.containsPoint(n);if(n.isMesh&&n.geometry){const e=n;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),Mo.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(Mo)}else return n.isObject3D?this.frustum.intersectsObject(n):!1}addObject(n){this.scene.add(n)}removeObject(n){this.scene.remove(n)}cleanScene(n){const e=t=>{t.map?.dispose(),t.uniforms&&Object.values(t.uniforms).forEach(i=>{i.value?.dispose?.()}),t.dispose()};n.traverse(t=>{t.geometry?.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>{e(i)}):e(t.material)),t instanceof Pa||t.dispose?.(),t!==n&&this.cleanScene(t)})}},ig=class extends cd{constructor(){super(...arguments),this._abortController=new AbortController}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}load(n,e,t,i){const r=this._abortController.signal,s=super.load(n,c=>{o(),e(c)},t,c=>{if(o(),r.aborted){const l=new Error;l.name="AbortError",l.message="The operation was aborted.",i(l)}else i(c)});function a(){s.src=""}function o(){r.removeEventListener("abort",a,!1)}return r.addEventListener("abort",a,!1),s}},rg=class extends Qi{constructor(n){super(n),this.fileLoader=new ld,this.fileLoader.setResponseType("blob"),this.imageLoader=new ig}destroy(){this.abortLoading(),super.destroy()}abortLoading(){this.fileLoader.abort?.(),this.imageLoader.abort()}loadFile(n,e,t){const i=ui.get(n,t);if(i){if(i instanceof Blob)return e?.(100),Promise.resolve(i);ui.remove(n,t)}this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(n)),this.fileLoader.setWithCredentials(this.config.withCredentials(n));let r=0;return e?.(r),this.fileLoader.loadAsync(n,s=>{if(s.lengthComputable){const a=s.loaded/s.total*100;a>r&&(r=a,e?.(r))}}).then(s=>(r=100,e?.(r),ui.add(n,t,s),s))}loadImage(n,e,t){const i=ui.get(n,t);return i?(e?.(100),i instanceof Blob?this.blobToImage(i):Promise.resolve(i)):!e&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(n)),this.imageLoader.loadAsync(n).then(r=>(ui.add(n,t,r),r))):this.loadFile(n,e,t).then(r=>this.blobToImage(r))}blobToImage(n){return new Promise((e,t)=>{const i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(i.src),e(i)},i.onerror=t,i.src=URL.createObjectURL(n)})}preloadPanorama(n){return this.viewer.adapter.supportsPreload(n)?this.viewer.adapter.loadTexture(n,!1):Promise.reject(new Ye("Current adapter does not support preload"))}dispatchProgress(n){this.viewer.loader.setProgress(n),this.viewer.dispatchEvent(new jl(Math.round(n)))}},sg=class extends Qi{constructor(n){super(n),this.zoom=new Di(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new En(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new pl(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new zi(e))},{yaw:new Di(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new Di(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new Di(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new Gi(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(qe.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(qe.degToRad(this.config.moveSpeed*50))}update(n){this.zoom.update(n),this.position.update(n),this.roll.update(n)}},ag=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new N(0,0,Sn),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},og=class extends gl{constructor(n){if(super(),this.plugins={},this.children=[],this.parent=Ko(n.container),!this.parent)throw new Ye('"container" element not found.');this.parent[Bn]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),ul(this.parent),dl(this.container,"core"),this.state=new ag,this.config=V_(n),this.__setSize(this.config.size),this.overlay=new Y_(this);try{Dt.load()}catch(e){console.error(e),this.showError(this.config.lang.webglError);return}ui.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new ng(this),this.textureLoader=new rg(this),this.eventsHandler=new tg(this),this.dataHelper=new J_(this),this.dynamics=new sg(this),this.adapter.init?.(),this.loader=new X_(this),this.navbar=new W_(this),this.panel=new j_(this),this.notification=new q_(this),this.autoSize(),this.setCursor(null),js(Dt.isTouchEnabled,e=>{Gr(this.container,"psv--is-touch",e)}),this.config.plugins.forEach(([e,t])=>{this.plugins[e.id]=new e(this,t)});for(const e of Object.values(this.plugins))e.init?.();this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[n,e]of Object.entries(this.plugins))e.destroy(),delete this.plugins[n];this.children.slice().forEach(n=>n.destroy()),this.children.length=0,this.eventsHandler?.destroy(),this.renderer?.destroy(),this.textureLoader?.destroy(),this.dataHelper?.destroy(),this.adapter?.destroy(),this.dynamics?.destroy(),this.parent.removeChild(this.container),delete this.parent[Bn]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new Hi)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(n){if(typeof n=="string")return this.plugins[n];{const e=Ns(n);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return el(this.parent,Dt.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(n){n?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new ki(this.getSize())),this.navbar.autoSize())}setPanorama(n,e={}){this.textureLoader.abortLoading(),this.state.transitionAnimation?.cancel();const t=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),this.hideError(),this.resetIdleTimer(),this.config.panorama=n,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection,(typeof this.config.panoData!="function"||typeof e.panoData=="function")&&(this.config.panoData=e.panoData);const i=s=>{if(ll(s))return!1;if(this.loader.hide(),this.state.loadingPromise=null,s)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(s),this.dispatchEvent(new ic(n,s)),s;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new Jl(n));const r=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(s=>{if(s.panorama!==this.config.panorama)throw this.adapter.disposeTexture(s),Ls();const a=this.dataHelper.cleanPanoramaOptions(e,s.panoData);return(!Tt(a.zoom)||!Tt(a.position))&&this.stopAll(),{textureData:s,cleanOptions:a}});return!t||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=r.then(({textureData:s,cleanOptions:a})=>{this.renderer.show(),this.renderer.setTexture(s),this.renderer.setPanoramaPose(s.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new _i(s)),Tt(a.zoom)||this.zoom(a.zoom),Tt(a.position)||this.rotate(a.position)}).then(()=>i(),s=>i(s)):this.state.loadingPromise=r.then(({textureData:s,cleanOptions:a})=>(this.loader.hide(),this.dispatchEvent(new _i(s)),this.state.transitionAnimation=this.renderer.transition(s,a,t),this.state.transitionAnimation)).then(s=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new ac(s)),!s)throw Ls()}).then(()=>i(),s=>i(s)),this.state.loadingPromise}setOptions(n){const e={...this.config,...n};for(let[t,i]of Object.entries(n)){if(!(t in Mi)){bt(`Unknown option ${t}`);continue}if(t in vo){bt(vo[t]);continue}switch(t in Os&&(i=Os[t](i,{rawConfig:e,defValue:Mi[t]})),this.config[t]=i,t){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new En(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new It(Object.keys(n)))}setOption(n,e){this.setOptions({[n]:e})}showError(n){this.overlay.show({id:yt.ERROR,image:$_,title:n,dismissible:!1})}hideError(){this.overlay.hide(yt.ERROR)}rotate(n){const e=new yl(this.dataHelper.cleanPosition(n));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(n){this.dynamics.zoom.setValue(n)}zoomIn(n=1){this.dynamics.zoom.step(n)}zoomOut(n=1){this.dynamics.zoom.step(-n)}animate(n){const e=Ks(n),t=!Tt(n.zoom),i=new Qs(e?this.dataHelper.cleanPosition(n):void 0,n.zoom);if(this.dispatchEvent(i),i.defaultPrevented)return;this.stopAll();const{duration:r,properties:s}=this.dataHelper.getAnimationProperties(n.speed,i.position,i.zoomLevel);return r?(this.state.animation=new Ir({properties:s,duration:r,easing:n.easing||"inOutSine",onTick:a=>{e&&this.dynamics.position.setValue({yaw:a.yaw,pitch:a.pitch}),t&&this.dynamics.zoom.setValue(a.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(i.position),t&&this.zoom(i.zoomLevel),new Ir(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(n){this.__setSize(n),this.autoSize()}__setSize(n){["width","height"].forEach(e=>{n?.[e]&&(/^[0-9.]+$/.test(n[e])&&(n[e]+="px"),this.parent.style[e]=n[e])})}enterFullscreen(){this.isFullscreenEnabled()||tl(this.parent,Dt.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&nl(Dt.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(n){return new K_(this,n)}setCursor(n){this.state.cursorOverride=n,n?this.container.style.cursor=n:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(n){this.state.objectsObservers[n]||(this.state.objectsObservers[n]=null)}unobserveObjects(n){delete this.state.objectsObservers[n]}stopAll(){return this.dispatchEvent(new Wi),this.disableIdleTimer(),this.stopAnimation()}};window.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("viewer");if(!n){console.error("No se encontró el contenedor #viewer");return}new og({container:n,panorama:"/panoramas/tecno1.jpg",navbar:["zoom","move","fullscreen"]})});
