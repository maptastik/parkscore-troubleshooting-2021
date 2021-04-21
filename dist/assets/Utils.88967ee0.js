var t,e,r,n,o,s,i,a,c=Object.defineProperty,u=Object.prototype.hasOwnProperty,E=Object.getOwnPropertySymbols,f=Object.prototype.propertyIsEnumerable,l=(t,e,r)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,h=(t,e)=>{for(var r in e||(e={}))u.call(e,r)&&l(t,r,e[r]);if(E)for(var r of E(e))f.call(e,r)&&l(t,r,e[r]);return t};import{df as I,g as A,m as T}from"./vendor.1ee57f36.js";function L(t){return[255&t,(65280&t)>>>8,(16711680&t)>>>16,(4278190080&t)>>>24]}function O(t,e){return 65535&t|e<<16}function d(t,e,r,n){return 255&t|(255&e)<<8|(255&r)<<16|n<<24}(a=t||(t={}))[a.FILL=0]="FILL",a[a.LINE=1]="LINE",a[a.MARKER=2]="MARKER",a[a.TEXT=3]="TEXT",a[a.LABEL=4]="LABEL",function(t){t[t.SUCCEEDED=0]="SUCCEEDED",t[t.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(e||(e={})),function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(r||(r={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(n||(n={})),function(t){t[t.NONE=0]="NONE",t[t.OPACITY=1]="OPACITY",t[t.COLOR=2]="COLOR",t[t.ROTATION=4]="ROTATION",t[t.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",t[t.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",t[t.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",t[t.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(o||(o={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(s||(s={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(i||(i={}));class S{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(t,e,r,n,o,s,i,a,c){this.color=t,this.haloColor=e,this.haloSize=r,this.size=n,this.angle=o,this.offsetX=s,this.offsetY=i,this.hAnchor=a,this.vAnchor=c}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}S.pool=new I(S);const _=A.getLogger("esri.views.2d.engine.webgl.Utils");function y(t){const e={};for(const r of t)e[r.name]=r.strideInBytes;return e}const m=y([{name:"geometry",strideInBytes:32,divisor:0}]),N=y([{name:"geometry",strideInBytes:32,divisor:0}]),U=y([{name:"geometry",strideInBytes:12,divisor:0}]),w=y([{name:"geometry",strideInBytes:36,divisor:0}]),R=y([{name:"geometry",strideInBytes:32,divisor:0}]),v=y([{name:"geometry",strideInBytes:36,divisor:0}]);function p(e,r){switch(e){case t.MARKER:return m;case t.FILL:return r?U:N;case t.LINE:return w;case t.TEXT:return R;case t.LABEL:return v}}const C=["geometry"],g=["geometry"],P=["geometry"],M=["geometry"],b=["geometry"];function B(e){switch(e){case t.MARKER:return C;case t.FILL:return g;case t.LINE:return P;case t.TEXT:return M;case t.LABEL:return b}}function D(t){switch(t%4){case 0:case 2:return 4;case 1:case 3:return 1}}function F(t,e){switch(e%4){case 0:case 2:return new Uint32Array(Math.floor(t*e/4));case 1:case 3:return new Uint8Array(t*e)}}function G(t,e){switch(e%4){case 0:case 2:return new Uint32Array(t);case 1:case 3:return new Uint8Array(t)}}function H(t){return null!=t}function Y(t){return"number"==typeof t}function X(t,e){switch(t){case"butt":return 0;case"round":return e?2:1;case"square":return 2;default:return _.error(new T("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),1}}function Z(t){switch(t){case"miter":return 2;case"bevel":return 0;case"round":return 1;default:return _.error(new T("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),1}}function z(t){switch(t){case"opacity":return n.OPACITY;case"color":return n.COLOR;case"rotation":return n.ROTATION;case"size":return n.SIZE;default:return _.error(`Cannot interpret unknown vv: ${t}`),null}}function x(t,e,r,n,o,s,i){for(const c in s){const e=s[c].stride,n=D(e),i=s[c].data,a=r[c].data,u=e*o.vertexCount/n,E=e*t/n,f=e*o.vertexFrom/n;for(let t=0;t<u;++t)a[t+E]=i[t+f]}const a=o.indexCount;for(let c=0;c<a;++c)n[c+e]=i[c+o.indexFrom]-o.vertexFrom+t}const j={geometry:35044};function $(t,e){const r=[];for(let n=0;n<5;++n){const o=B(n),s={};for(const t of o)s[t]={data:e(n,t)};r.push({data:t(n),buffers:s})}return r}function K(t){switch(t){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5126:case 5124:case 5125:return 4}}function V(t){switch(t){case 5121:return 1;case 32819:return 2;case 5126:return 4;default:return void _.error(new T("webgl-utils",`Unable to handle type ${t}`))}}function q(t){switch(t){case 5121:return Uint8Array;case 32819:return Uint16Array;case 5126:return Float32Array;default:return void _.error(new T("webgl-utils",`Unable to handle type ${t}`))}}const W=new Map,k=(t,e)=>{if(!W.has(t)){const r=function(t){const e={};for(const r in t){const n=t[r];let o=0;e[r]=n.map((t=>{const e=h(h({},t),{normalized:t.normalized||!1,divisor:t.divisor||0,offset:o,stride:0});return o+=t.count*K(t.type),e})),e[r].forEach((t=>t.stride=o))}return e}(e),n={strides:(t=>{const e={};for(const r in t){const n=t[r];e[r]=n.length?n[0].stride:0}return e})(r),bufferLayouts:r,attributes:(t=>{const e={};for(const r in t)for(const n of t[r])e[n.name]=n.location;return e})(e)};W.set(t,n)}return W.get(t)};export{o as A,D as C,j as D,t as E,V as G,q as H,r as I,$ as K,L as M,H as N,i as O,Y as P,F as R,X as S,k as V,Z,z as _,p as a,G as b,s as c,O as m,x as q,d as w};