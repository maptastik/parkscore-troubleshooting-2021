var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,i=Object.prototype.propertyIsEnumerable,o=(t,r,i)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,n=(e,n)=>{for(var a in n||(n={}))t.call(n,a)&&o(e,a,n[a]);if(r)for(var a of r(n))i.call(n,a)&&o(e,a,n[a]);return e};import{g as a,j1 as s,j2 as c,j3 as l,j4 as d,j5 as u,j6 as f,cu as m,gQ as p,gM as h,gR as v,cx as g,bT as x,gJ as b,cw as y,j7 as w,gN as _,j8 as T,cv as S,j9 as C,ja as M,gW as O,jb as P,cC as A,jc as I,q as R,gS as F,gK as L,jd as z,k as B,je as D,bO as N,gU as E,gT as V,jf as U,dg as H,jg as j,jh as G,ji as k,jj as q,jk as $,jl as W,jm as X,jn as J,df as K,jo as Q,jp as Y,jq as Z,jr as ee,dx as te,js as re,jt as ie,bJ as oe,bF as ne,bH as ae,ju as se,r as ce,e as le,jv as de,jw as ue,jx as fe,jy as me,bG as pe,jz as he,ch as ve,iy as ge,jA as xe,hn as be,jB as ye,da as we,jC as _e,c0 as Te,m as Se,c1 as Ce,c2 as Me,jD as Oe,dN as Pe,fi as Ae,jE as Ie,J as Re,jF as Fe,ai as Le,I as ze,eY as Be,jG as De,eJ as Ne,jH as Ee,fc as Ve,aZ as Ue,jI as He,bk as je,jJ as Ge,f6 as ke,U as qe,jK as $e,aM as We,jL as Xe,jM as Je}from"./vendor.1ee57f36.js";import{a as Ke,b as Qe,t as Ye,e as Ze,I as et,c as tt}from"./vec3f32.ab50b617.js";import{p as rt,x as it,a as ot,u as nt,A as at,n as st,r as ct,s as lt,t as dt,F as ut,g as ft,h as mt,I as pt,w as ht,v as vt,e as gt,M as xt,L as bt,O as yt,E as wt}from"./InterleavedLayout.aac2e361.js";import{i as _t,d as Tt,q as St,h as Ct,A as Mt}from"./aaBoundingBox.960884d4.js";import{o as Ot}from"./Program.76c009ec.js";import{r as Pt}from"./mat4f32.65c405e6.js";import{t as At}from"./requestImageUtils.dc9344c8.js";function It(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function Rt(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function Ft(e,t){return new Float64Array(e,t,16)}Object.freeze({__proto__:null,create:It,clone:Rt,fromValues:function(e,t,r,i,o,n,a,s,c,l,d,u,f,m,p,h){return[e,t,r,i,o,n,a,s,c,l,d,u,f,m,p,h]},createView:Ft,IDENTITY:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]});const Lt=a.getLogger("esri.views.3d.support.buffer.math");function zt(e,t,r){if(e.count!==t.count)return void Lt.error("source and destination buffers need to have the same number of elements");const i=e.count,o=r[0],n=r[1],a=r[2],s=r[4],c=r[5],l=r[6],d=r[8],u=r[9],f=r[10],m=r[12],p=r[13],h=r[14],v=e.typedBuffer,g=e.typedBufferStride,x=t.typedBuffer,b=t.typedBufferStride;for(let y=0;y<i;y++){const e=y*g,t=y*b,r=x[t],i=x[t+1],w=x[t+2];v[e]=o*r+s*i+d*w+m,v[e+1]=n*r+c*i+u*w+p,v[e+2]=a*r+l*i+f*w+h}}function Bt(e,t,r){if(e.count!==t.count)return void Lt.error("source and destination buffers need to have the same number of elements");const i=e.count,o=r[0],n=r[1],a=r[2],s=r[3],c=r[4],l=r[5],d=r[6],u=r[7],f=r[8],m=e.typedBuffer,p=e.typedBufferStride,h=t.typedBuffer,v=t.typedBufferStride;for(let g=0;g<i;g++){const e=g*p,t=g*v,r=h[t],i=h[t+1],x=h[t+2];m[e]=o*r+s*i+d*x,m[e+1]=n*r+c*i+u*x,m[e+2]=a*r+l*i+f*x}}function Dt(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<i;c++){const e=c*n,t=c*s;o[e]=r*a[t],o[e+1]=r*a[t+1],o[e+2]=r*a[t+2]}}Object.freeze({__proto__:null,transformMat4:zt,transformMat3:Bt,scale:Dt,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<i;c++){const e=c*n,t=c*s;o[e]=a[t]>>r,o[e+1]=a[t+1]>>r,o[e+2]=a[t+2]>>r}}});class Nt{constructor(e){this.allocator=e,this.items=[],this.itemsPtr=0,this.tickHandle=s.before((()=>this.reset())),this.grow()}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=c(this.tickHandle)),this.items=c(this.items)}get(){return 0===this.itemsPtr&&s((()=>{})),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const e=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*Et);this.items.length=Math.min(e,this.items.length),this.itemsPtr=0}grow(){for(let e=0;e<Math.max(8,Math.min(this.items.length,Et));e++)this.items.push(this.allocator())}}const Et=1024;class Vt{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(r/this.itemByteSize),this.tickHandle=s.before((()=>this.reset()))}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=c(this.tickHandle)),this.itemsPtr=0,this.items=c(this.items),this.buffers=c(this.buffers)}get(){0===this.itemsPtr&&s((()=>{}));const e=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=e;){const e=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let t=0;t<this.itemsPerBuffer;++t)this.items.push(this.itemCreate(e,t*this.itemByteSize));this.buffers.push(e)}return this.items[this.itemsPtr++]}reset(){const e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(e=Ut){return new Vt(16,l,e)}static createVec3f64(e=Ut){return new Vt(24,d,e)}static createVec4f64(e=Ut){return new Vt(32,u,e)}static createMat3f64(e=Ut){return new Vt(72,Ke,e)}static createMat4f64(e=Ut){return new Vt(128,Ft,e)}static createQuatf64(e=Ut){return new Vt(32,Qe,e)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const Ut=4096;Vt.createVec2f64();const Ht=Vt.createVec3f64(),jt=Vt.createVec4f64();Vt.createMat3f64();const Gt=Vt.createMat4f64();function kt(e){return e?{origin:f(e.origin),vector:f(e.vector)}:{origin:m(),vector:m()}}function qt(e,t){const r=Qt.get();return r.origin=e,r.vector=t,r}function $t(e,t,r=kt()){return p(r.origin,e),p(r.vector,t),r}function Wt(e,t){const r=h(Ht.get(),t,e.origin),i=v(e.vector,r),o=v(e.vector,e.vector),n=x(i/o,0,1),a=h(Ht.get(),g(Ht.get(),e.vector,n),r);return v(a,a)}function Xt(e,t,r,i,o){const{vector:n,origin:a}=e,s=h(Ht.get(),t,a),c=y(n),l=v(n,s)/c;return g(o,n,x(l,r,i)),b(o,o,e.origin)}function Jt(e,t,r,i){const o=1e-6,n=e.origin,a=b(Ht.get(),n,e.vector),s=t.origin,c=b(Ht.get(),s,t.vector),l=Ht.get(),d=Ht.get();if(l[0]=n[0]-s[0],l[1]=n[1]-s[1],l[2]=n[2]-s[2],d[0]=c[0]-s[0],d[1]=c[1]-s[1],d[2]=c[2]-s[2],Math.abs(d[0])<o&&Math.abs(d[1])<o&&Math.abs(d[2])<o)return!1;const u=Ht.get();if(u[0]=a[0]-n[0],u[1]=a[1]-n[1],u[2]=a[2]-n[2],Math.abs(u[0])<o&&Math.abs(u[1])<o&&Math.abs(u[2])<o)return!1;const f=l[0]*d[0]+l[1]*d[1]+l[2]*d[2],m=d[0]*u[0]+d[1]*u[1]+d[2]*u[2],p=l[0]*u[0]+l[1]*u[1]+l[2]*u[2],h=d[0]*d[0]+d[1]*d[1]+d[2]*d[2],v=(u[0]*u[0]+u[1]*u[1]+u[2]*u[2])*h-m*m;if(Math.abs(v)<o)return!1;let g=(f*m-p*h)/v,y=(f+m*g)/h;r&&(g=x(g,0,1),y=x(y,0,1));const _=Ht.get(),T=Ht.get();return _[0]=n[0]+g*u[0],_[1]=n[1]+g*u[1],_[2]=n[2]+g*u[2],T[0]=s[0]+y*d[0],T[1]=s[1]+y*d[1],T[2]=s[2]+y*d[2],i.tA=g,i.tB=y,i.pA=_,i.pB=T,i.distance2=w(_,T),!0}Vt.createQuatf64();const Kt={tA:0,tB:0,pA:m(),pB:m(),distance2:0},Qt=new Nt((()=>({origin:null,vector:null})));function Yt(e){return e?{p0:f(e.p0),p1:f(e.p1),p2:f(e.p2)}:{p0:m(),p1:m(),p2:m()}}function Zt(e,t,r,i=Yt()){return p(i.p0,e),p(i.p1,t),p(i.p2,r),i}function er(e,t,r){const i=T(e,t),o=T(t,r),n=T(r,e),a=(i+o+n)/2,s=a*(a-i)*(a-o)*(a-n);return s<=0?0:Math.sqrt(s)}function tr(e,t,r){return h(or,t,e),h(nr,r,e),y(_(or,or,nr))/2}Object.freeze({__proto__:null,create:kt,wrap:qt,copy:function(e,t=kt()){return $t(e.origin,e.vector,t)},fromValues:$t,fromPoints:function(e,t,r=kt()){return p(r.origin,e),h(r.vector,t,e),r},distance2:Wt,distance:function(e,t){return Math.sqrt(Wt(e,t))},projectPoint:function(e,t,r){return Xt(e,t,0,1,r)},pointAt:function(e,t,r){return b(r,e.origin,g(r,e.vector,t))},projectPointClamp:Xt,closestRayDistance2:function(e,t){if(Jt(e,qt(t.origin,t.direction),!1,Kt)){const{tA:t,pB:r,distance2:i}=Kt;if(t>=0&&t<=1)return i;if(t<0)return w(e.origin,r);if(t>1)return w(b(Ht.get(),e.origin,e.vector),r)}return null},closestLineSegmentPoint:function(e,t,r){return!!Jt(e,t,!0,Kt)&&(p(r,Kt.pA),!0)},closestLineSegmentDistance2:function(e,t){return Jt(e,t,!0,Kt)?Kt.distance2:null}});const rr=new Nt(kt),ir=new Nt((()=>({p0:null,p1:null,p2:null}))),or=m(),nr=m();Object.freeze({__proto__:null,create:Yt,wrap:function(e,t,r){const i=ir.get();return i.p0=e,i.p1=t,i.p2=r,i},copy:function(e,t=Yt()){return Zt(e.p0,e.p1,e.p2,t)},fromValues:Zt,distance2:function(e,t){const r=e.p0,i=e.p1,o=e.p2,n=h(Ht.get(),i,r),a=h(Ht.get(),o,i),s=h(Ht.get(),r,o),c=h(Ht.get(),t,r),l=h(Ht.get(),t,i),d=h(Ht.get(),t,o),u=_(n,n,s),f=v(_(Ht.get(),n,u),c),m=v(_(Ht.get(),a,u),l),p=v(_(Ht.get(),s,u),d);if(f>0&&m>0&&p>0){const e=v(u,c);return e*e/v(u,u)}const g=Wt($t(r,n,rr.get()),t),x=Wt($t(i,a,rr.get()),t),b=Wt($t(o,s,rr.get()),t);return Math.min(g,x,b)},intersectRay:function(e,t,r){const i=1e-5,{direction:o,origin:n}=t,{p0:a,p1:s,p2:c}=e,l=s[0]-a[0],d=s[1]-a[1],u=s[2]-a[2],f=c[0]-a[0],m=c[1]-a[1],p=c[2]-a[2],h=o[1]*p-m*o[2],v=o[2]*f-p*o[0],x=o[0]*m-f*o[1],y=l*h+d*v+u*x;if(y>-i&&y<i)return!1;const w=1/y,_=n[0]-a[0],T=n[1]-a[1],S=n[2]-a[2],C=w*(_*h+T*v+S*x);if(C<0||C>1)return!1;const M=T*u-d*S,O=S*l-u*_,P=_*d-l*T,A=w*(o[0]*M+o[1]*O+o[2]*P);return!(A<0||C+A>1)&&(r&&(g(r,o,w*(f*M+m*O+p*P)),b(r,n,r)),!0)},areaPoints2d:er,area2d:function(e){return er(e.p0,e.p1,e.p2)},areaPoints3d:tr});let ar=1,sr=null;const cr=new Uint32Array([0]);function lr(e){if(1===e)return cr;if(e>ar||null==sr){for(;e>ar;)ar*=2;sr=new Uint32Array(ar);for(let e=0;e<ar;e++)sr[e]=e}return new Uint32Array(sr.buffer,0,e)}let dr=0;const ur=m(),fr=m(),mr=m(),pr=m();class hr{constructor(e,t=hr.DefaultIndices,r="triangle"){this.initialize(e,t,r)}get id(){return this._id}get vertexAttributes(){return this._vertexAttributes}get indices(){return this._indices}get indexCount(){const e=C(this._indices);return null==e?0:e.length}get primitiveType(){return this._primitiveType}getVertexAttr(){return this.vertexAttributes}initialize(e,t=hr.DefaultIndices,r="triangle"){const i={};for(const o in e){const{data:t,size:r}=e[o];i[o]={data:t,size:r,offsetIdx:0,strideIdx:r}}if(t===hr.DefaultIndices){const e=lr(function(e){const t=C(e);return null==t?0:t.data.length/t.size}(i));t={};for(const r in i)t[r]=e}this._id=dr++,this._vertexAttributes=i,this._indices=t,this._primitiveType=r}toRenderData(){return{id:this._id.toString(),indices:this._indices,vertexAttr:this._vertexAttributes}}getIndices(e){return this._indices[e]}getAttribute(e){return this._vertexAttributes[e]}estimateGpuMemoryUsage(){let e=0;if(this._indices[M.POSITION]){const t=3;e+=this._indices[M.POSITION].length*t*4}if(this._indices[M.NORMAL]){const t=3;e+=this._indices[M.NORMAL].length*t*4}if(this._indices[M.UV0]){const t=2;e+=this._indices[M.UV0].length*t*4}if(this._indices[M.COLOR]){const t=1;e+=this._indices[M.COLOR].length*t*4}return e}}hr.DefaultIndices={};class vr{constructor(){this._count=0}gen(e){return null==e&&(e="a"),e+"_"+this._count++}}class gr{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this._position=i,this.center=m(),P(e.length>=1),P(r.length%this._numIndexPerPrimitive==0),P(r.length>=e.length*this._numIndexPerPrimitive),P(3===this._position.size||4===this._position.size);const{data:o,offsetIdx:n,strideIdx:a}=this._position;let s=0;const c=e.length;let l=n+a*r[this._numIndexPerPrimitive*e[s]];for(gr.tmpIndices.clear(),gr.tmpIndices.push(l),this.bbMin=A(o[l],o[l+1],o[l+2]),this.bbMax=f(this.bbMin);s<c;++s){const t=this._numIndexPerPrimitive*e[s];for(let e=0;e<this._numIndexPerPrimitive;++e){l=n+a*r[t+e],gr.tmpIndices.push(l);let i=o[l];this.bbMin[0]=Math.min(i,this.bbMin[0]),this.bbMax[0]=Math.max(i,this.bbMax[0]),i=o[l+1],this.bbMin[1]=Math.min(i,this.bbMin[1]),this.bbMax[1]=Math.max(i,this.bbMax[1]),i=o[l+2],this.bbMin[2]=Math.min(i,this.bbMin[2]),this.bbMax[2]=Math.max(i,this.bbMax[2])}}I(this.center,this.bbMin,this.bbMax,.5),this.bsRadius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let d=this.bsRadius*this.bsRadius;for(s=0;s<gr.tmpIndices.length;++s){l=gr.tmpIndices.data[s];const e=o[l]-this.center[0],t=o[l+1]-this.center[1],r=o[l+2]-this.center[2],i=e*e+t*t+r*r;if(i<=d)continue;const n=Math.sqrt(i),a=.5*(n-this.bsRadius);this.bsRadius=this.bsRadius+a,d=this.bsRadius*this.bsRadius;const c=a/n;this.center[0]+=e*c,this.center[1]+=t*c,this.center[2]+=r*c}gr.tmpIndices.clear()}getCenter(){return this.center}getBSRadius(){return this.bsRadius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getPrimitiveIndices(){return this.primitiveIndices}getIndices(){return this.indices}getPosition(){return this._position}getChildren(){if(this._children)return this._children;if(w(this.bbMin,this.bbMax)>1){const e=I(m(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let l=0;l<8;++l)i[l]=0;const{data:o,offsetIdx:n,strideIdx:a}=this._position;for(let l=0;l<t;++l){let t=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[l];let c=n+a*this.indices[s],d=o[c],u=o[c+1],f=o[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){c=n+a*this.indices[s+e];const t=o[c],r=o[c+1],i=o[c+2];t<d&&(d=t),r<u&&(u=r),i<f&&(f=i)}d<e[0]&&(t|=1),u<e[1]&&(t|=2),f<e[2]&&(t|=4),r[l]=t,++i[t]}let s=0;for(let l=0;l<8;++l)i[l]>0&&++s;if(s<2)return;const c=new Array(8);for(let l=0;l<8;++l)c[l]=i[l]>0?new Uint32Array(i[l]):void 0;for(let l=0;l<8;++l)i[l]=0;for(let l=0;l<t;++l){const e=r[l];c[e][i[e]++]=this.primitiveIndices[l]}this._children=new Array(8);for(let l=0;l<8;++l)void 0!==c[l]&&(this._children[l]=new gr(c[l],this._numIndexPerPrimitive,this.indices,this._position))}return this._children}}(gr||(gr={})).tmpIndices=new O({deallocator:null});var xr=gr;class br{constructor(e,t){this._boundingInfo=null,this._id=br.__idGen.gen(t),this._data=e}get id(){return this._id}get data(){return this._data}getIndices(e){return this.data.getIndices(e)}get indexCount(){return this.data.indexCount}getAttribute(e){return this.data.getAttribute(e)}get vertexCount(){return this.data.indexCount}get faceCount(){return this.data.indexCount/3}get boundingInfo(){return R(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return"triangle"===this.data.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.getIndices(M.POSITION);return function(e,t,r){if(!e)return!1;const{strideIdx:i,offsetIdx:o,data:n}=e;S(r,0,0,0),S(pr,0,0,0);let a=0,s=0;for(let c=0;c<t.length-2;c+=3){const e=t[c+0]*i+o,l=t[c+1]*i+o,d=t[c+2]*i+o;S(ur,n[e+0],n[e+1],n[e+2]),S(fr,n[l+0],n[l+1],n[l+2]),S(mr,n[d+0],n[d+1],n[d+2]);const u=tr(ur,fr,mr);u?(b(ur,ur,fr),b(ur,ur,mr),g(ur,ur,1/3*u),b(r,r,ur),a+=u):(b(pr,pr,ur),b(pr,pr,fr),b(pr,pr,mr),s+=3)}return!(0===s&&0===a||(0!==a?(g(r,r,1/a),0):0===s||(g(r,pr,1/s),0)))}(this.getAttribute(M.POSITION),t,e)}computeAttachmentOriginPoints(e){const t=this.getIndices(M.POSITION);return function(e,t,r){if(!e||!t)return!1;const{strideIdx:i,offsetIdx:o,data:n}=e;S(r,0,0,0);let a=-1,s=0;for(let c=0;c<t.length;c++){const e=t[c]*i+o;a!==e&&(r[0]+=n[e+0],r[1]+=n[e+1],r[2]+=n[e+2],s++),a=e}return s>1&&g(r,r,1/s),s>0}(this.getAttribute(M.POSITION),t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){let e=this.data.getIndices(M.POSITION);const t=this.data.getAttribute(M.POSITION),r="triangle"===this.data.primitiveType?3:1;if(0===e.length){e=new Uint32Array(r);for(let t=0;t<r;++t)e[t]=t}const i=e.length;P(i%r==0,"Indexing error: "+i.toFixed(0)+" not divisible by "+r.toFixed(0));const o=lr(i/r);return new xr(o,r,e,t)}}function yr(e,t){return v(e,t)/y(e)}function wr(e,t){const r=v(e,t)/(y(e)*y(t));return-F(r)}br.__idGen=new vr;const _r=m(),Tr=m();function Sr(e=Yr){return[e[0],e[1],e[2],e[3]]}function Cr(e,t,r,i){return Or(e,t,r,i,jt.get())}function Mr(e,t=Sr()){return Or(e[0],e[1],e[2],e[3],t)}function Or(e,t,r,i,o=Sr()){return o[0]=e,o[1]=t,o[2]=r,o[3]=i,o}function Pr(e,t,r=Sr()){p(r,t);const i=v(t,t);return Math.abs(i-1)>1e-5&&i>1e-12&&g(r,r,1/Math.sqrt(i)),Nr(r,e,r),r}function Ar(e,t,r,i=Sr()){return Er(h(Ht.get(),e,t),h(Ht.get(),r,t),e,i)}function Ir(e,t,r,i,o){if(e.count<3)return!1;e.getVec(r,Fr);let n=i,a=!1;for(;n<e.count-1&&!a;)e.getVec(n,Lr),n++,a=!z(Fr,Lr);if(!a)return!1;for(n=Math.max(n,o),a=!1;n<e.count&&!a;)e.getVec(n,zr),n++,h(Br,Fr,Lr),L(Br,Br),h(Dr,Lr,zr),L(Dr,Dr),a=!z(Fr,zr)&&!z(Lr,zr)&&Math.abs(v(Br,Dr))<Rr;return a?(Ar(Fr,Lr,zr,t),!0):(0!==r||1!==i||2!==o)&&Ir(e,t,0,1,2)}Object.freeze({__proto__:null,projectPoint:function(e,t,r){const i=v(e,t)/v(e,e);return g(r,e,i)},projectPointSignedLength:yr,angle:wr,angleAroundAxis:function(e,t,r){L(_r,e),L(Tr,t);const i=v(_r,Tr),o=F(i),n=_(_r,_r,Tr);return v(n,r)<0?2*Math.PI-o:o}});const Rr=.99619469809,Fr=m(),Lr=m(),zr=m(),Br=m(),Dr=m();function Nr(e,t,r){return e!==r&&Mr(e,r),r[3]=-v(r,t),r}function Er(e,t,r,i=Sr()){return Pr(r,_(Ht.get(),t,e),i)}function Vr(e,t,r){return!!B(t)&&Kr(e,t.origin,t.direction,!0,!1,r)}function Ur(e,t,r){return Kr(e,t.origin,t.vector,!1,!1,r)}function Hr(e,t,r){return Kr(e,t.origin,t.vector,!1,!0,r)}function jr(e,t){const{center:r,radius:i}=t;return Jr(e,r)-i>=0}function Gr(e,t){return Jr(e,t)>=0}function kr(e,t){const r=t[0],i=t[1],o=t[2],n=t[3],a=t[4],s=t[5];return e[0]*(e[0]>0?r:n)+e[1]*(e[1]>0?i:a)+e[2]*(e[2]>0?o:s)+e[3]>=0}function qr(e,t){const r=v(e,t.ray.direction),i=-Jr(e,t.ray.origin);if(i<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return i>0;if((i<0||r<0)&&!(i<0&&r<0))return!0;const o=i/r;return r>0?o<t.c1&&(t.c1=o):o>t.c0&&(t.c0=o),t.c0<=t.c1}function $r(e,t){const r=v(e,t.ray.direction),i=-Jr(e,t.ray.origin);if(r>-1e-6&&r<1e-6)return i>0;const o=i/r;return r>0?o<t.c1&&(t.c1=o):o>t.c0&&(t.c0=o),t.c0<=t.c1}function Wr(e,t,r){const i=g(Ht.get(),e,-e[3]),o=Xr(e,h(Ht.get(),t,i),Ht.get());return b(r,o,i),r}function Xr(e,t,r){const i=g(Ht.get(),e,v(e,t));return h(r,t,i),r}function Jr(e,t){return v(e,t)+e[3]}function Kr(e,t,r,i,o,n){const a=v(e,r);if(0===a)return!1;let s=-(v(e,t)+e[3])/a;return o&&(s=i?Math.max(0,s):x(s,0,1)),!(s<0||!i&&s>1||(b(n,t,g(n,r,s)),0))}function Qr(e){return e}const Yr=[0,0,1,0];function Zr(e){return e?{origin:f(e.origin),direction:f(e.direction)}:{origin:m(),direction:m()}}function ei(e,t=Zr()){return ti(e.origin,e.direction,t)}function ti(e,t,r=Zr()){return p(r.origin,e),p(r.direction,t),r}function ri(e,t,r=Zr()){const i=D(N(Ht.get(),t));if(i[2]=0,!e.unprojectFromRenderScreen(i,r.origin))return null;const o=D(N(Ht.get(),t));o[2]=1;const n=e.unprojectFromRenderScreen(o,Ht.get());return R(n)?null:(h(r.direction,n,r.origin),r)}function ii(e,t,r=Zr()){return oi(e,e.screenToRender(t,D(Ht.get())),r)}function oi(e,t,r=Zr()){p(r.origin,e.eye);const i=S(Ht.get(),t[0],t[1],1),o=e.unprojectFromRenderScreen(i,Ht.get());return R(o)?null:(h(r.direction,o,r.origin),r)}function ni(e,t){const r=_(Ht.get(),L(Ht.get(),e.direction),h(Ht.get(),t,e.origin));return v(r,r)}function ai(e,t,r){const i=v(e.direction,h(r,t,e.origin));return b(r,e.origin,g(r,e.direction,i)),r}function si(){return{origin:null,direction:null}}Object.freeze({__proto__:null,create:Sr,wrap:Cr,copy:Mr,fromValues:Or,fromNormalAndOffset:function(e,t,r=Sr()){return p(r,e),r[3]=t,r},fromPositionAndNormal:Pr,fromPoints:Ar,fromManyPoints:function(e,t){return Ir(e,t,0,1,2)},fromManyPointsSampleAt:Ir,setOffsetFromPoint:Nr,negate:function(e,t){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},fromVectorsAndPoint:Er,intersectRay:Vr,intersectLineSegment:Ur,intersectLineSegmentClamp:Hr,isSphereFullyInside:jr,isSphereFullyOutside:function(e,t){const{center:r,radius:i}=t;return Jr(e,r)+i<0},isPointInside:Gr,isPointOutside:function(e,t){return Jr(e,t)<0},isAABBFullyInside:kr,clip:qr,clipInfinite:$r,projectPoint:Wr,projectVector:Xr,distance:function(e,t){return Math.abs(Jr(e,t))},signedDistance:Jr,normal:Qr,UP:Yr});const ci=new Nt(si);Object.freeze({__proto__:null,create:Zr,wrap:function(e,t){const r=ci.get();return r.origin=e,r.direction=t,r},copy:ei,fromPoints:function(e,t,r=Zr()){return p(r.origin,e),h(r.direction,t,e),r},fromValues:ti,fromScreen:function(e,t,r=Zr()){return ri(e,e.screenToRender(t,D(Ht.get())),r)},fromRender:ri,fromScreenAtEye:ii,fromRenderAtEye:oi,distance2:ni,distance:function(e,t){return Math.sqrt(ni(e,t))},closestPoint:ai,createWrapper:si});const li=a.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");function di(e=Pi){return{plane:Sr(e.plane),origin:f(e.origin),basis1:f(e.basis1),basis2:f(e.basis2)}}function ui(e,t=di()){return fi(e.origin,e.basis1,e.basis2,t)}function fi(e,t,r,i=di()){return p(i.origin,e),p(i.basis1,t),p(i.basis2,r),mi(i),o=i,n="fromValues()",Math.abs(v(o.basis1,o.basis2)/(y(o.basis1)*y(o.basis2)))>1e-6&&li.warn(n,"Provided basis vectors are not perpendicular"),Math.abs(v(o.basis1,Ti(o)))>1e-6&&li.warn(n,"Basis vectors and plane normal are not perpendicular"),Math.abs(-v(Ti(o),o.origin)-o.plane[3])>1e-6&&li.warn(n,"Plane offset is not consistent with plane origin"),i;var o,n}function mi(e){Er(e.basis2,e.basis1,e.origin,e.plane)}function pi(e,t,r){e!==r&&ui(e,r);const i=g(Ht.get(),Ti(e),t);return b(r.origin,r.origin,i),r.plane[3]-=t,r}function hi(e,t=di()){const r=(e[2]-e[0])/2,i=(e[3]-e[1])/2;return S(t.origin,e[0]+r,e[1]+i,0),S(t.basis1,r,0,0),S(t.basis2,0,i,0),Or(0,0,1,0,t.plane),t}function vi(e,t,r){return!!Vr(e.plane,t,r)&&Si(e,r)}function gi(e,t,r){const i=Ai.get();Oi(e,t,i,Ai.get());let o=Number.POSITIVE_INFINITY;for(const n of Li){const a=Mi(e,n,Ii.get()),s=Ht.get();if(Ur(i,a,s)){const e=V(Ht.get(),t.origin,s),i=Math.abs(F(v(t.direction,e)));i<o&&(o=i,p(r,s))}}return o===Number.POSITIVE_INFINITY?xi(e,t,r):r}function xi(e,t,r){if(vi(e,t,r))return r;const i=Ai.get(),o=Ai.get();Oi(e,t,i,o);let n=Number.POSITIVE_INFINITY;for(const a of Li){const s=Mi(e,a,Ii.get()),c=Ht.get();if(Hr(i,s,c)){const e=ni(t,c);if(!Gr(o,c))continue;e<n&&(n=e,p(r,c))}}return wi(e,t.origin)<n&&bi(e,t.origin,r),r}function bi(e,t,r){const i=Wr(e.plane,t,Ht.get()),o=Xt(Ci(e,e.basis1),i,-1,1,Ht.get()),n=Xt(Ci(e,e.basis2),i,-1,1,Ht.get());return h(r,b(Ht.get(),o,n),e.origin),r}function yi(e,t,r){const{origin:i,basis1:o,basis2:n}=e,a=h(Ht.get(),t,i),s=yr(o,a),c=yr(n,a),l=yr(Ti(e),a);return S(r,s,c,l)}function wi(e,t){const r=yi(e,t,Ht.get()),{basis1:i,basis2:o}=e,n=y(i),a=y(o),s=Math.max(Math.abs(r[0])-n,0),c=Math.max(Math.abs(r[1])-a,0),l=r[2];return s*s+c*c+l*l}function _i(e,t){const r=-e.plane[3];return yr(Ti(e),t)-r}function Ti(e){return e.plane}function Si(e,t){const r=h(Ht.get(),t,e.origin),i=q(e.basis1),o=q(e.basis2),n=v(e.basis1,r),a=v(e.basis2,r);return-n-i<0&&n-i<0&&-a-o<0&&a-o<0}function Ci(e,t){const r=Ii.get();return p(r.origin,e.origin),p(r.vector,t),r}function Mi(e,t,r){const{basis1:i,basis2:o,origin:n}=e,a=g(Ht.get(),i,t.origin[0]),s=g(Ht.get(),o,t.origin[1]);b(r.origin,a,s),b(r.origin,r.origin,n);const c=g(Ht.get(),i,t.direction[0]),l=g(Ht.get(),o,t.direction[1]);return g(r.vector,b(c,c,l),2),r}function Oi(e,t,r,i){const o=Ti(e);Er(o,t.direction,t.origin,r),Er(r,o,t.origin,i)}const Pi={plane:Sr(),origin:A(0,0,0),basis1:A(1,0,0),basis2:A(0,1,0)},Ai=new Nt(Sr),Ii=new Nt(kt),Ri=m(),Fi=new Nt((()=>({origin:null,basis1:null,basis2:null,plane:null}))),Li=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],zi=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Bi=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,BoundedPlaneClass:class{constructor(){this.plane=Sr(),this.origin=m(),this.basis1=m(),this.basis2=m()}},create:di,wrap:function(e,t,r){const i=Fi.get();return i.origin=e,i.basis1=t,i.basis2=r,i.plane=Cr(0,0,0,0),mi(i),i},copy:ui,fromValues:fi,updateUnboundedPlane:mi,elevate:pi,setExtent:function(e,t,r){return hi(t,r),pi(r,_i(e,e.origin),r),r},fromAABoundingRect:hi,intersectRay:vi,intersectRayClosestSilhouette:function(e,t,r){if(vi(e,t,r))return r;const i=gi(e,t,Ht.get());return b(r,t.origin,g(Ht.get(),t.direction,E(t.origin,i)/y(t.direction))),r},closestPointOnSilhouette:gi,closestPoint:xi,projectPoint:bi,projectPointLocal:yi,distance2:wi,distance:function(e,t){return Math.sqrt(wi(e,t))},distanceToSilhouette:function(e,t){let r=Number.NEGATIVE_INFINITY;for(const i of Li){const o=Wt(Mi(e,i,Ii.get()),t);o>r&&(r=o)}return Math.sqrt(r)},extrusionContainsPoint:function(e,t){return Gr(e.plane,t)&&Si(e,t)},axisAt:function(e,t,r,i){return function(e,t,r){switch(t){case 0:p(r,e.basis1),L(r,r);break;case 1:p(r,e.basis2),L(r,r);break;case 2:p(r,Ti(e))}return r}(e,r,i)},altitudeAt:_i,setAltitudeAt:function(e,t,r,i){const o=_i(e,t),n=g(Ri,Ti(e),r-o);return b(i,t,n),i},equals:function(e,t){return z(e.basis1,t.basis1)&&z(e.basis2,t.basis2)&&z(e.origin,t.origin)},transform:function(e,t,r){return e!==r&&ui(e,r),U(zi,t),H(zi,zi),j(r.basis1,e.basis1,zi),j(r.basis2,e.basis2,zi),j(r.plane,e.plane,zi),j(r.origin,e.origin,t),Nr(r.plane,r.origin,r.plane),r},rotate:function(e,t,r,i){return e!==i&&ui(e,i),G(Bi,k(Bi),t,r),j(i.basis1,e.basis1,Bi),j(i.basis2,e.basis2,Bi),mi(i),i},normal:Ti,UP:Pi});const Di=a.getLogger("esri.views.3d.support.geometryUtils.sphere");function Ni(e){return e?{radius:e.radius,center:f(e.center)}:{radius:1,center:m()}}function Ei(e,t=Ni()){return Vi(e.radius,e.center,t)}function Vi(e,t,r=Ni()){return p(r.center,t),r.radius=e,r}function Ui(e,t,r){if(R(t))return!1;const i=h(Ht.get(),t.origin,e.center),o=v(t.direction,t.direction),n=2*v(t.direction,i),a=n*n-4*o*(v(i,i)-e.radius*e.radius);if(a<0)return!1;const s=Math.sqrt(a);let c=(-n-s)/(2*o);const l=(-n+s)/(2*o);return(c<0||l<c&&l>0)&&(c=l),!(c<0||(r&&b(r,t.origin,g(Ht.get(),t.direction,c)),0))}function Hi(e,t,r){const i=Ht.get(),o=Gt.get();_(i,t.origin,t.direction),_(r,i,t.origin),g(r,r,1/y(r)*e.radius);const n=Gi(e,t.origin),a=wr(t.origin,r);return k(o),G(o,o,a+n,i),j(r,r,o),r}function ji(e,t,r){const i=h(Ht.get(),t,e.center),o=g(Ht.get(),i,e.radius/y(i));return b(r,o,e.center)}function Gi(e,t){const r=h(Ht.get(),t,e.center),i=y(r),o=e.radius+Math.abs(e.radius-i);return F(e.radius/o)}const ki=m();function qi(e,t,r,i){const o=h(ki,t,e.center);switch(r){case 0:{const e=$(o,ki)[2];return S(i,-Math.sin(e),Math.cos(e),0)}case 1:{const e=$(o,ki),t=e[1],r=e[2],n=Math.sin(t);return S(i,-n*Math.cos(r),-n*Math.sin(r),Math.cos(t))}case 2:return L(i,o);default:return}}function $i(e,t){const r=h(Ki,t,e.center);return y(r)-e.radius}const Wi=new Nt((()=>({center:null,radius:0}))),Xi=Zr(),Ji=m(),Ki=m();function Qi(e=Zi){return[e[0],e[1],e[2],e[3]]}function Yi(e,t,r,i,o=Qi()){return o[0]=e,o[1]=t,o[2]=r,o[3]=i,o}Object.freeze(Ji),Object.freeze({__proto__:null,create:Ni,wrap:function(e,t){const r=Wi.get();return r.radius=e,r.center=t||Ji,r},copy:Ei,fromValues:Vi,elevate:function(e,t,r){return e!==r&&p(r.center,e.center),r.radius=e.radius+t,r},setExtent:function(e,t,r){return Di.error("sphere.setExtent is not yet supported"),e===r?r:Ei(e,r)},intersectRay:Ui,intersectScreen:function(e,t,r,i){return Ui(e,ii(t,r,Xi),i)},intersectsRay:function(e,t){return Ui(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if(Ui(e,t,r))return r;const i=Hi(e,t,Ht.get());return b(r,t.origin,g(Ht.get(),t.direction,E(t.origin,i)/y(t.direction))),r},closestPointOnSilhouette:Hi,closestPoint:function(e,t,r){return Ui(e,t,r)?r:(ai(t,e.center,r),ji(e,r,r))},projectPoint:ji,distanceToSilhouette:function(e,t){const r=h(Ht.get(),t,e.center),i=q(r),o=e.radius*e.radius;return Math.sqrt(Math.abs(i-o))},angleToSilhouette:Gi,axisAt:qi,altitudeAt:$i,setAltitudeAt:function(e,t,r,i){const o=$i(e,t),n=qi(e,t,2,Ki),a=g(Ki,n,r-o);return b(i,t,a),i}});const Zi=[0,0,1,0];function eo(e){return e?{ray:Zr(e.ray),c0:e.c0,c1:e.c1}:{ray:Zr(),c0:0,c1:Number.MAX_VALUE}}function to(e,t,r,i=eo()){return ei(e,i.ray),i.c0=t,i.c1=r,i}function ro(e,t=eo()){return ei(e,t.ray),t.c0=0,t.c1=Number.MAX_VALUE,t}function io(e,t,r=eo()){const i=y(e.vector);return ti(e.origin,t,r.ray),r.c0=0,r.c1=i,r}function oo(e,t,r){return b(r,e.ray.origin,g(r,e.ray.direction,t))}Object.freeze({__proto__:null,create:Qi,wrap:function(e,t,r,i){return Yi(e,t,r,i,jt.get())},wrapAxisAngle:function(e,t){return Yi(e[0],e[1],e[2],t,jt.get())},copy:function(e,t=Qi()){return Yi(e[0],e[1],e[2],e[3],t)},fromValues:Yi,fromAxisAndAngle:function(e,t,r=Qi()){return p(r,e),r[3]=t,r},fromPoints:function(e,t,r=Qi()){return _(r,e,t),L(r,r),r[3]=wr(e,t),r},axis:function(e){return e},UP:Zi});const no=new Nt((()=>({c0:0,c1:0,ray:null})));function ao(e){if(e){const{planes:t,points:r}=e;return{planes:[Sr(t[0]),Sr(t[1]),Sr(t[2]),Sr(t[3]),Sr(t[4]),Sr(t[5])],points:[f(r[0]),f(r[1]),f(r[2]),f(r[3]),f(r[4]),f(r[5]),f(r[6]),f(r[7])]}}return{planes:[Sr(),Sr(),Sr(),Sr(),Sr(),Sr()],points:[m(),m(),m(),m(),m(),m(),m(),m()]}}function so(e,t,r=ao()){for(let i=0;i<6;i++)Mr(e[i],r.planes[i]);for(let i=0;i<8;i++)p(r.points[i],t[i]);return r}function co(e){const{planes:t,points:r}=e;Ar(r[4],r[0],r[3],t[0]),Ar(r[1],r[5],r[6],t[1]),Ar(r[4],r[5],r[1],t[2]),Ar(r[3],r[2],r[6],t[3]),Ar(r[0],r[1],r[2],t[4]),Ar(r[5],r[4],r[7],t[5])}function lo(e,t){for(let r=0;r<6;r++)if(!qr(e[r],t))return!1;return!0}Object.freeze({__proto__:null,create:eo,wrap:function(e,t,r){const i=no.get();return i.ray=e,i.c0=t,i.c1=r,i},copy:function(e,t=eo()){return to(e.ray,e.c0,e.c1,t)},fromValues:to,fromRay:ro,fromLineSegment:function(e,t=eo()){return io(e,L(Ht.get(),e.vector),t)},fromLineSegmentAndDirection:io,getStart:function(e,t){return oo(e,e.c0,t)},getEnd:function(e,t){return oo(e,e.c1,t)},getAt:oo});const uo=[J(-1,-1,-1,1),J(1,-1,-1,1),J(1,1,-1,1),J(-1,1,-1,1),J(-1,-1,1,1),J(1,-1,1,1),J(1,1,1,1),J(-1,1,1,1)],fo=new Nt(eo);Object.freeze({__proto__:null,create:ao,copy:function(e,t=ao()){return so(e.planes,e.points,t)},fromValues:so,fromMatrix:function(e,t,r=ao()){const{points:i}=r,o=W(Gt.get(),t,e);U(o,o);for(let n=0;n<8;++n){const e=X(jt.get(),uo[n],o);S(i[n],e[0]/e[3],e[1]/e[3],e[2]/e[3])}return co(r),r},recomputePlanes:co,intersectsSphere:function(e,t){for(let r=0;r<6;r++)if(jr(e[r],t))return!1;return!0},intersectsRay:function(e,t){return lo(e,ro(t,fo.get()))},intersectClipRay:function(e,t){for(let r=0;r<6;r++){if(!$r(e[r],t))return!1}return!0},intersectsLineSegment:function(e,t,r){return lo(e,io(t,r,fo.get()))},intersectsPoint:function(e,t){for(let r=0;r<6;r++)if(Jr(e[r],t)>0)return!1;return!0},intersectsAABB:function(e,t){for(let r=0;r<6;r++)if(kr(e[r],t))return!1;return!0},planePointIndices:{bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]}});class mo{acquire(e,t,r,i,o,n){this.id=mo._idGen.gen(e&&e.id),this.geometry=e,this.material=t,this.transformation=r,this.instanceParameters=i,this.origin=o,this.shaderTransformation=n}getStaticTransformation(){return this.transformation}getShaderTransformation(){return this.shaderTransformation?this.shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(e){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,e):this.geometry.computeAttachmentOrigin(e))&&(j(e,e,this.getStaticTransformation()),!0)}}function po(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}mo._idGen=new vr,mo.pool=new K(mo);const ho=new Float64Array(1),vo=new Float32Array(2);const go=new class{constructor(e=0){this.offset=e,this.sphere=Ni(),this.tmpVertex=m()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*t+i[8]*r+i[12],n=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(o*o+n*n+a*a);o+=o*s,n+=n*s,a+=a*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*o+c[4]*n+c[8]*a+c[12],this.tmpVertex[1]=c[1]*o+c[5]*n+c[9]*a+c[13],this.tmpVertex[2]=c[2]*o+c[6]*n+c[10]*a+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e,t){const r=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),i=this.offset/r;return this.sphere.center[0]=t[0]+t[0]*i,this.sphere.center[1]=t[1]+t[1]*i,this.sphere.center[2]=t[2]+t[2]*i,this.sphere.radius=e+e*this.offset/r,this.sphere}};const xo=0,bo=1,yo=2,wo=3,_o=4,To=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const r=this[t];this[t]=null,r&&"function"==typeof r.dispose&&r.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class So extends(To(class{})){}class Co extends So{constructor(e){super(),this.material=e.material,this.techniqueRep=e.techniqueRep,this.output=e.output}getTechnique(){return this.technique}getPipelineState(e,t){return this.getTechnique().pipeline}ensureResources(e){return 2}ensureParameters(e){}}class Mo extends Co{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquireIfNotUndefined(this._textureId),this._textureNormal=this._acquireIfNotUndefined(e.normalTextureId),this._textureEmissive=this._acquireIfNotUndefined(e.emissiveTextureId),this._textureOcclusion=this._acquireIfNotUndefined(e.occlusionTextureId),this._textureMetallicRoughness=this._acquireIfNotUndefined(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach((e=>this._textureRepository.release(e))),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=e,this._texture=this._acquireIfNotUndefined(this._textureId))}bindTexture(e,t){B(this._texture)&&(t.setUniform1i("tex",xo),e.bindTexture(this._texture.glTexture,xo)),B(this._textureNormal)&&(t.setUniform1i("normalTexture",bo),e.bindTexture(this._textureNormal.glTexture,bo)),B(this._textureEmissive)&&(t.setUniform1i("texEmission",yo),e.bindTexture(this._textureEmissive.glTexture,yo)),B(this._textureOcclusion)&&(t.setUniform1i("texOcclusion",wo),e.bindTexture(this._textureOcclusion.glTexture,wo)),B(this._textureMetallicRoughness)&&(t.setUniform1i("texMetallicRoughness",_o),e.bindTexture(this._textureMetallicRoughness.glTexture,_o))}bindTextureScale(e,t){const r=B(this._texture)&&this._texture.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquireIfNotUndefined(e){if(!R(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_releaseIfNotUndefined(e){void 0!==e&&(this._textureIDs.delete(e),this._textureRepository.release(e))}}function Oo(e,t,r,i){return function(e,t){return Math.max(Q(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,function(e,t,r){const i=r.parameters,o=r.paddingPixelsOverride;return Po.scale=Math.min(i.divisor/(t-i.offset),1),Po.factor=(n=e,Math.abs(n*n*n)),Po.minPixelSize=i.minPixelSize,Po.paddingPixels=o,Po;var n}(t,r,i))}const Po={scale:0,factor:0,minPixelSize:0,paddingPixels:0},Ao=_t(),Io=M;function Ro(e,t,r,i,o,n,a){const s=function(e){return!!B(e)&&!e.visible}(t),c=r.tolerance;if(!s)if(e.boundingInfo)P("triangle"===e.data.primitiveType),Lo(e.boundingInfo,i,o,c,n,a);else{const t=e.getIndices(Io.POSITION),r=e.getAttribute(Io.POSITION);Do(i,o,0,t.length/3,t,r,void 0,n,a)}}const Fo=m();function Lo(e,t,r,i,o,n){const a=function(e,t,r){return S(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,Fo);if(Tt(Ao,e.getBBMin()),St(Ao,e.getBBMax()),B(o)&&o.applyToAabb(Ao),function(e,t,r,i){return function(e,t,r,i,o){const n=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(n,a),c=Math.max(n,a);const l=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(c=Math.min(c,Math.max(l,d)),c<0)return!1;if(s=Math.max(s,Math.min(l,d)),s>c)return!1;const u=(e[2]-i-t[2])*r[2],f=(e[5]+i-t[2])*r[2];return c=Math.min(c,Math.max(u,f)),!(c<0)&&(s=Math.max(s,Math.min(u,f)),!(s>c)&&s<o)}(e,t,r,i,1/0)}(Ao,t,a,i)){const a=e.getPrimitiveIndices(),s=e.getIndices(),c=e.getPosition(),l=a?a.length:s.length/3;if(l>ko){const a=e.getChildren();if(void 0!==a){for(let e=0;e<8;++e)void 0!==a[e]&&Lo(a[e],t,r,i,o,n);return}}Do(t,r,0,l,s,c,a,o,n)}}const zo=2**-52,Bo=m();function Do(e,t,r,i,o,n,a,s,c){if(a)return function(e,t,r,i,o,n,a,s,c){const{data:l,offsetIdx:d,strideIdx:u}=n,f=e[0],m=e[1],p=e[2],h=t[0]-f,v=t[1]-m,g=t[2]-p;for(let x=r;x<i;++x){const e=a[x];let t=3*e,r=d+u*o[t++],i=l[r++],n=l[r++],b=l[r];r=d+u*o[t++];let y=l[r++],w=l[r++],_=l[r];r=d+u*o[t];let T=l[r++],S=l[r++],C=l[r];B(s)&&([i,n,b]=s.applyToVertex(i,n,b,x),[y,w,_]=s.applyToVertex(y,w,_,x),[T,S,C]=s.applyToVertex(T,S,C,x));const M=y-i,O=w-n,P=_-b,A=T-i,I=S-n,R=C-b,F=v*R-I*g,L=g*A-R*h,z=h*I-A*v,D=M*F+O*L+P*z;if(Math.abs(D)<=zo)continue;const N=f-i,E=m-n,V=p-b,U=N*F+E*L+V*z;if(D>0){if(U<0||U>D)continue}else if(U>0||U<D)continue;const H=E*P-O*V,j=V*M-P*N,G=N*O-M*E,k=h*H+v*j+g*G;if(D>0){if(k<0||U+k>D)continue}else if(k>0||U+k<D)continue;const q=(A*H+I*j+R*G)/D;q>=0&&c(q,Vo(M,O,P,A,I,R,Bo),e)}}(e,t,r,i,o,n,a,s,c);const{data:l,offsetIdx:d,strideIdx:u}=n,f=e[0],m=e[1],p=e[2],h=t[0]-f,v=t[1]-m,g=t[2]-p;for(let x=r,b=3*r;x<i;++x){let e=d+u*o[b++],t=l[e++],r=l[e++],i=l[e];e=d+u*o[b++];let n=l[e++],a=l[e++],y=l[e];e=d+u*o[b++];let w=l[e++],_=l[e++],T=l[e];B(s)&&([t,r,i]=s.applyToVertex(t,r,i,x),[n,a,y]=s.applyToVertex(n,a,y,x),[w,_,T]=s.applyToVertex(w,_,T,x));const S=n-t,C=a-r,M=y-i,O=w-t,P=_-r,A=T-i,I=v*A-P*g,R=g*O-A*h,F=h*P-O*v,L=S*I+C*R+M*F;if(Math.abs(L)<=zo)continue;const z=f-t,D=m-r,N=p-i,E=z*I+D*R+N*F;if(L>0){if(E<0||E>L)continue}else if(E>0||E<L)continue;const V=D*M-C*N,U=N*S-M*z,H=z*C-S*D,j=h*V+v*U+g*H;if(L>0){if(j<0||E+j>L)continue}else if(j>0||E+j<L)continue;const G=(O*V+P*U+A*H)/L;G>=0&&c(G,Vo(S,C,M,O,P,A,Bo),x)}}const No=m(),Eo=m();function Vo(e,t,r,i,o,n,a){return S(No,e,t,r),S(Eo,i,o,n),_(a,No,Eo),L(a,a),a}function Uo(e,t,r){if(!e)return;const i=e.parameters,o=e.paddingPixelsOverride;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,o)}function Ho(e,t){const r=t?Ho(t):{};for(const i in e){let t=e[i];t&&t.forEach&&(t=jo(t)),null==t&&i in r||(r[i]=t)}return r}function jo(e){const t=[];return e.forEach((e=>t.push(e))),t}const Go={multiply:1,ignore:2,replace:3,tint:4},ko=1e3,qo={position:0,normal:1,uv0:2,color:3,size:4,tangent:4,uvMapSpace:4,auxpos1:5,symbolColor:5,auxpos2:6,featureAttribute:6,instanceFeatureAttribute:6,instanceColor:7,bound1:5,bound2:6,bound3:7,model:8,modelNormal:12,modelOriginHi:11,modelOriginLo:15};class $o{constructor(e,t,r){this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=qo,this.id=$o._idGen.gen(e),this._params=Ho(t,r),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(){return!1}setParameterValues(e){(function(e,t){let r=!1;for(const i in t){const o=t[i];void 0!==o&&(r=!0,Array.isArray(o)?e[i]=o.slice():e[i]=o)}return r})(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){B(this.materialRepository)&&this.materialRepository.materialChanged(this)}}$o._idGen=new vr;function Wo(e,t,r,i,o){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==o||1===o)for(let c=0;c<s;++c){const r=2*e[c];n[i]=t[r],n[i+1]=t[r+1],i+=a}else for(let c=0;c<s;++c){const r=2*e[c];for(let e=0;e<o;++e)n[i]=t[r],n[i+1]=t[r+1],i+=a}}function Xo(e,t,r,i,o){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==o||1===o)for(let c=0;c<s;++c){const r=3*e[c];n[i]=t[r],n[i+1]=t[r+1],n[i+2]=t[r+2],i+=a}else for(let c=0;c<s;++c){const r=3*e[c];for(let e=0;e<o;++e)n[i]=t[r],n[i+1]=t[r+1],n[i+2]=t[r+2],i+=a}}function Jo(e,t,r,i,o){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==o||1===o)for(let c=0;c<s;++c){const r=4*e[c];n[i]=t[r],n[i+1]=t[r+1],n[i+2]=t[r+2],n[i+3]=t[r+3],i+=a}else for(let c=0;c<s;++c){const r=4*e[c];for(let e=0;e<o;++e)n[i]=t[r],n[i+1]=t[r+1],n[i+2]=t[r+2],n[i+3]=t[r+3],i+=a}}function Ko(e,t,r,i,o,n){if(r){const a=r,s=i.typedBuffer,c=i.typedBufferStride,l=e.length;if(o*=c,null==n||1===n)for(let r=0;r<l;++r){const i=3*e[r],n=t[i],l=t[i+1],d=t[i+2];s[o]=a[0]*n+a[4]*l+a[8]*d+a[12],s[o+1]=a[1]*n+a[5]*l+a[9]*d+a[13],s[o+2]=a[2]*n+a[6]*l+a[10]*d+a[14],o+=c}else for(let r=0;r<l;++r){const i=3*e[r],l=t[i],d=t[i+1],u=t[i+2],f=a[0]*l+a[4]*d+a[8]*u+a[12],m=a[1]*l+a[5]*d+a[9]*u+a[13],p=a[2]*l+a[6]*d+a[10]*u+a[14];for(let e=0;e<n;++e)s[o]=f,s[o+1]=m,s[o+2]=p,o+=c}}else Xo(e,t,i,o,n)}function Qo(e,t,r,i,o,n){if(r){const a=r,s=i.typedBuffer,c=i.typedBufferStride,l=e.length,d=a[0],u=a[1],f=a[2],m=a[4],p=a[5],h=a[6],v=a[8],g=a[9],x=a[10],b=Math.abs(1-d*d+m*m+v*v)>1e-5||Math.abs(1-u*u+p*p+g*g)>1e-5||Math.abs(1-f*f+h*h+x*x)>1e-5;if(o*=c,null==n||1===n)for(let r=0;r<l;++r){const i=3*e[r],n=t[i],a=t[i+1],l=t[i+2];let y=d*n+m*a+v*l,w=u*n+p*a+g*l,_=f*n+h*a+x*l;if(b){const e=y*y+w*w+_*_;if(e<.999999&&e>1e-6){const t=Math.sqrt(e);y/=t,w/=t,_/=t}}s[o+0]=y,s[o+1]=w,s[o+2]=_,o+=c}else for(let r=0;r<l;++r){const i=3*e[r],a=t[i],l=t[i+1],y=t[i+2];let w=d*a+m*l+v*y,_=u*a+p*l+g*y,T=f*a+h*l+x*y;if(b){const e=w*w+_*_+T*T;if(e<.999999&&e>1e-6){const t=Math.sqrt(e);w/=t,_/=t,T/=t}}for(let e=0;e<n;++e)s[o+0]=w,s[o+1]=_,s[o+2]=T,o+=c}}else Xo(e,t,i,o,n)}function Yo(e,t,r,i,o,n){const a=i.typedBuffer,s=i.typedBufferStride,c=e.length;if(o*=s,null==n||1===n){if(4===r)for(let l=0;l<c;++l){const r=4*e[l];a[o]=t[r],a[o+1]=t[r+1],a[o+2]=t[r+2],a[o+3]=t[r+3],o+=s}else if(3===r)for(let l=0;l<c;++l){const r=3*e[l];a[o]=t[r],a[o+1]=t[r+1],a[o+2]=t[r+2],a[o+3]=255,o+=s}}else if(4===r)for(let l=0;l<c;++l){const r=4*e[l];for(let e=0;e<n;++e)a[o]=t[r],a[o+1]=t[r+1],a[o+2]=t[r+2],a[o+3]=t[r+3],o+=s}else if(3===r)for(let l=0;l<c;++l){const r=3*e[l];for(let e=0;e<n;++e)a[o]=t[r],a[o+1]=t[r+1],a[o+2]=t[r+2],a[o+3]=255,o+=s}}function Zo(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}var en;(en=Zo||(Zo={})).int=function(e){return Math.round(e).toString()},en.float=function(e){return e.toPrecision(8)};function tn(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(Zo`
        #define discardOrAdjustAlpha(color) { if (color.a < ${Zo.float(.001)}) { discard; } }
      `);break;case 1:r.code.add(Zo`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(Zo`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(Zo`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `)}}const rn=Z(770,1,771,771),on=ee(1,1),nn=ee(0,771);const an={factor:-1,units:-2};function sn(e){return e?an:null}function cn(e){return 3===e||2===e?513:515}class ln{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function dn(e={}){return(t,r)=>{var i,o;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const n=t._parameterNames.length-1,a=e.count||2,s=Math.ceil(te(a)),c=null!=(o=t._parameterBits)?o:[0];let l=0;for(;c[l]+s>16;)l++,l>=c.length&&c.push(0);t._parameterBits=c;const d=c[l],u=(1<<s)-1<<d;c[l]+=s,Object.defineProperty(t,r,{get(){return this[n]},set(e){if(this[n]!==e&&(this[n]=e,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~u|+e<<d&u,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration values must be booleans or numbers!"}})}}var un;!function(e){function t(e,t,r){re(fn,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",fn)}e.bindCamPosition=function(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])},e.bindProjectionMatrix=function(e,t){e.setUniformMatrix4fv("proj",t)},e.bindNearFar=function(e,t){e.setUniform2fv("nearFar",t)},e.bindViewCustomOrigin=t,e.bindView=function(e,r){t(e,r.origin,r.camera.viewMatrix)},e.bindViewport=function(e,t){e.setUniform4fv("viewport",t.camera.fullViewport)}}(un||(un={}));const fn=Pt();function mn(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=Zo`
      struct SliceFactors {
        float front;
        float side0;
        float side1;
        float side2;
        float side3;
      };

      SliceFactors calculateSliceFactors(vec3 pos) {
        vec3 rel = pos - slicePlaneOrigin;

        vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
        float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

        float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
        float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

        float basis1Dot = dot(slicePlaneBasis1, rel);
        float basis2Dot = dot(slicePlaneBasis2, rel);

        return SliceFactors(
          dot(slicePlaneNormal, pos) + slicePlaneW,
          -basis1Dot - basis1Len2,
          basis1Dot - basis1Len2,
          -basis2Dot - basis2Len2,
          basis2Dot - basis2Len2
        );
      }

      bool sliceByFactors(SliceFactors factors) {
        return factors.front < 0.0
          && factors.side0 < 0.0
          && factors.side1 < 0.0
          && factors.side2 < 0.0
          && factors.side3 < 0.0;
      }

      bool sliceEnabled() {
        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.
        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
      }

      bool sliceByPlane(vec3 pos) {
        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
      }

      #define rejectBySlice(_pos_) sliceByPlane(_pos_)
      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
    `,i=Zo`
      vec4 applySliceHighlight(vec4 color, vec3 pos) {
        SliceFactors factors = calculateSliceFactors(pos);

        if (sliceByFactors(factors)) {
          return color;
        }

        const float HIGHLIGHT_WIDTH = 1.0;
        const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);

        factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
        factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
        factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
        factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
        factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);

        float highlightFactor = (1.0 - step(0.5, factors.front))
          * (1.0 - step(0.5, factors.side0))
          * (1.0 - step(0.5, factors.side1))
          * (1.0 - step(0.5, factors.side2))
          * (1.0 - step(0.5, factors.side3));

        return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
      }
    `,o=t.sliceHighlightDisabled?Zo`#define highlightSlice(_color_, _pos_) (_color_)`:Zo`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(o)}else{const r=Zo`
      #define rejectBySlice(_pos_) false
      #define discardBySlice(_pos_) {}
      #define highlightSlice(_color_, _pos_) (_color_)
    `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}var pn;(pn=mn||(mn={})).bindUniformsWithOrigin=function(e,t,r){pn.bindUniforms(e,t,r.slicePlane,r.origin)},pn.bindUniforms=function(e,t,r,i){t.slicePlaneEnabled&&(B(r)?(i?(h(hn,r.origin,i),e.setUniform3fv("slicePlaneOrigin",hn)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",ie),e.setUniform3fv("slicePlaneBasis2",ie),e.setUniform3fv("slicePlaneOrigin",ie)))};const hn=m();function vn(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.code.add(Zo`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
      }
      else {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
      }
    }
  `)}function gn(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(Zo`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),e.vertex.code.add(Zo`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?Zo`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(Zo`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),t.vvColor?(e.vertex.defines.addInt("VV_COLOR_N",8),e.vertex.code.add(Zo`
      uniform float vvColorValues[VV_COLOR_N];
      uniform vec4 vvColorColors[VV_COLOR_N];

      vec4 vvGetColor(vec4 featureAttribute, float values[VV_COLOR_N], vec4 colors[VV_COLOR_N]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < VV_COLOR_N; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[VV_COLOR_N - 1];
      }

      ${t.vvInstancingEnabled?Zo`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(Zo`
      vec4 vvColor() { return vec4(1.0); }
    `)}function xn(e){e.vertex.code.add(Zo`
    float screenSizePerspectiveMinSize(float size, vec4 factor) {
      float nonZeroSize = 1.0 - step(size, 0.0);

      return (
        factor.z * (
          1.0 +
          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding
          nonZeroSize *
          2.0 * factor.w / (
            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1
          )
        )
      );
    }
  `),e.vertex.code.add(Zo`
    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
      return absCosAngle * absCosAngle * absCosAngle;
    }
  `),e.vertex.code.add(Zo`
    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
      return vec4(
        min(params.x / (distanceToCamera - params.y), 1.0),
        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
        params.z,
        params.w
      );
    }
  `),e.vertex.code.add(Zo`
    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
    }
  `),e.vertex.code.add(Zo`
    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorFloat(
        size,
        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
      );
    }
  `),e.vertex.code.add(Zo`
    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
    }
  `),e.vertex.code.add(Zo`
    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
    }
  `)}function bn(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(xn),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(Zo`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?Zo`vec3 worldNormal = normalize(worldPos + localOrigin);`:Zo`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?Zo`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:Zo`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(Zo`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `)}(vn||(vn={})).bindOutputHighlight=function(e,t,r){e.bindTexture(r.highlightDepthTexture,5),t.setUniform1i("depthTex",5),t.setUniform4f("highlightViewportPixelSz",0,0,r.inverseViewport[0],r.inverseViewport[1])},function(e){function t(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}e.bindUniforms=t,e.bindUniformsWithOpacity=function(e,r){t(e,r),r.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",r.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",r.vvOpacityOpacities))},e.bindUniformsForSymbols=function(e,r){t(e,r),r.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",r.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",r.vvSymbolRotationMatrix))}}(gn||(gn={})),(xn||(xn={})).bindUniforms=function(e,t){t.screenSizePerspective&&(Uo(t.screenSizePerspective,e,"screenSizePerspective"),Uo(t.screenSizePerspectiveAlignment||t.screenSizePerspective,e,"screenSizePerspectiveAlignment"))},(bn||(bn={})).bindUniforms=function(e,t,r){if(!t.verticalOffset)return;const i=function(e,t,r,i=yn){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),o=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*o,i.perDistance,i.minWorldLength,i.maxWorldLength)};const yn={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0},wn={mask:255},_n={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},Tn={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};function Sn(e){e.code.add(Zo`
    // This is the maximum float value representable as 32bit fixed point,
    // it is rgba2float(vec4(1)) inlined.
    const float MAX_RGBA_FLOAT =
      255.0 / 256.0 +
      255.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 / 256.0;

    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

    vec4 float2rgba(const float value) {
      // Make sure value is in the domain we can represent
      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

      // Decompose value in 32bit fixed point parts represented as
      // uint8 rgba components. Decomposition uses the fractional part after multiplying
      // by a power of 256 (this removes the bits that are represented in the previous
      // component) and then converts the fractional part to 8bits.
      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

      // Convert uint8 values (from 0 to 255) to floating point representation for
      // the shader
      const float toU8AsFloat = 1.0 / 255.0;

      return fixedPointU8 * toU8AsFloat;
    }

    // Factors to convert rgba back to float
    const vec4 RGBA_2_FLOAT_FACTORS = vec4(
      255.0 / (256.0),
      255.0 / (256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0 * 256.0)
    );

    float rgba2float(vec4 rgba) {
      // Convert components from 0->1 back to 0->255 and then
      // add the components together with their corresponding
      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
      return dot(rgba, RGBA_2_FLOAT_FACTORS);
    }
  `)}function Cn(e){e.fragment.include(Sn),e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("shadowMapNum","int"),e.fragment.uniforms.add("shadowMapDistance","vec4"),e.fragment.uniforms.add("shadowMapMatrix","mat4",4),e.fragment.uniforms.add("depthHalfPixelSz","float"),e.fragment.code.add(Zo`
    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      float halfPixelSize = depthHalfPixelSz;
      vec4 distance = shadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      if (i >= shadowMapNum) { return 0.0; }

      mat4 mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;

      // vertex completely outside? -> no shadow
      vec3 lvpos = 0.5 * lv.xyz + vec3(0.5);
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;

      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s10 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s11 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s01 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }
  `)}var Mn;(Mn=Cn||(Cn={})).bindUniforms=function(e,t,r){t.shadowMappingEnabled&&(t.shadowMap.bind(e,r),t.shadowMap.bindView(e,t.origin))},Mn.bindViewCustomOrigin=function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)},Mn.bindView=function(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)};class On{constructor(e){this.context=e,this._doublePrecisionRequiresObfuscation=null}get doublePrecisionRequiresObfuscation(){if(R(this._doublePrecisionRequiresObfuscation)){const e=An(this.context,!1),t=An(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let Pn=null;function An(e,t){const r=new oe(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),i=ne.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),o=new ae(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:i}),n=A(5633261.287538229,2626832.878767164,1434988.0495278358),a=A(5633271.46742708,2626873.6381334523,1434963.231608387),s=function(r,i){const o=new Ot(e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),n=new Float32Array(6);po(r,n,3);const a=new Float32Array(6);return po(i,a,3),e.bindProgram(o),o.setUniform3f("u_highA",n[0],n[2],n[4]),o.setUniform3f("u_lowA",n[1],n[3],n[5]),o.setUniform3f("u_highB",a[0],a[2],a[4]),o.setUniform3f("u_lowB",a[1],a[3],a[5]),o}(n,a),c=e.getBoundFramebufferObject(),{x:l,y:d,width:u,height:f}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(o),e.drawArrays(5,0,4);const m=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,m),s.dispose(),o.dispose(!1),i.dispose(),r.dispose(),e.setViewport(l,d,u,f),e.bindFramebuffer(c);const p=(n[2]-a[2])/25,h=se(m);return Math.abs(p-h)}function In({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(Zo`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `):e.add(Zo`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `)}function Rn(e){return!!ce("force-double-precision-obfuscation")||(t=e,(R(Pn)||Pn.context!==t)&&(Pn=new On(t)),Pn).doublePrecisionRequiresObfuscation;var t}function Fn(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(In,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[Zo`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,Zo`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?Zo`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,Zo`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,Zo`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangets?Zo`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:Zo``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}!function(e){e.Uniforms=class{},e.bindCustomOrigin=function(e,t){(function(e,t,r,i){for(let o=0;o<i;++o)ho[0]=e[o],po(ho,vo,1),t[o]=vo[0],r[o]=vo[1]})(t,Ln,zn,3),e.setUniform3fv("viewOriginHi",Ln),e.setUniform3fv("viewOriginLo",zn)}}(Fn||(Fn={}));const Ln=m(),zn=m();function Bn(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(Zo`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(Zo`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===t.attributeTextureCoordinates&&e.vertex.code.add(Zo`
      void forwardTextureCoordinates() {}
    `)}function Dn(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(Zo`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      vec2 dUVdx = dFdx(textureCoordinates) * atlasScale;
      vec2 dUVdy = dFdy(textureCoordinates) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `)}function Nn(e,t){e.include(Bn,t),e.fragment.code.add(Zo`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(Zo`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===t.attributeTextureCoordinates&&(e.include(Dn),e.fragment.code.add(Zo`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))}function En(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&i&&e.include(Nn,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(Zo`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(Zo`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(Zo`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(Zo`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(Zo`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):r.code.add(Zo`
      float getBakedOcclusion() { return 1.0; }
      `),r.code.add(Zo`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(Zo`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}function Vn(e,t){t.linearDepth?e.vertex.code.add(Zo`
    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
      vec4 eye = view * vec4(pos, 1.0);
      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
      return proj * eye;
    }
    `):e.vertex.code.add(Zo`
    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
      // Make sure the order of operations is the same as in transformPositionWithDepth.
      return proj * (view * vec4(pos, 1.0));
    }
    `)}Ye(0,.6,.2),(En||(En={})).bindUniforms=function(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))};const Un=a.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class Hn{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&Un.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class jn extends Hn{constructor(){super(...arguments),this.vertex=new qn,this.fragment=new qn,this.attributes=new $n,this.varyings=new Wn,this.extensions=new Xn,this.defines=new Jn}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),o="vertex"===e?this.vertex:this.fragment,n=o.uniforms.generateSource(),a=o.code.generateSource(),s="vertex"===e?Qn:Kn,c=this.defines.generateSource().concat(o.defines.generateSource());return`\n${t.join("\n")}\n\n${c.join("\n")}\n\n${s}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}}class Gn{constructor(){this._entries=new Array,this._set=new Set}add(e,t,r){const i=`${e}_${t}_${r}`;return this._set.has(i)||(this._entries.push([e,t,r]),this._set.add(i)),this}generateSource(){return this._entries.map((e=>{return`uniform ${e[1]} ${e[0]}${t=e[2],t?`[${t}]`:""};`;var t}))}}class kn{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class qn extends Hn{constructor(){super(...arguments),this.uniforms=new Gn,this.code=new kn,this.defines=new Jn}get builder(){return this}}class $n{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class Wn{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class Xn{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?Xn.ALLOWLIST_VERTEX:Xn.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}Xn.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Xn.ALLOWLIST_VERTEX=[];class Jn{constructor(){this._entries=new Map}addInt(e,t){const r=t%1==0?t.toFixed(0):t.toString();this._entries.set(e,r)}addFloat(e,t){const r=t%1==0?t.toFixed(1):t.toString();this._entries.set(e,r)}generateSource(){return Array.from(this._entries,(([e,t])=>`#define ${e} ${t}`))}}const Kn="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",Qn="precision highp float;\nprecision highp sampler2D;";function Yn(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(Zo`
      void forwardVertexColor() { vColor = color; }
    `),e.vertex.code.add(Zo`
      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }
    `)):e.vertex.code.add(Zo`
      void forwardVertexColor() {}
      void forwardNormalizedVertexColor() {}
    `)}function Zn(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(Zo`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("uCameraNearFar","vec2"),e.vertex.code.add(Zo`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - uCameraNearFar[0]) / (uCameraNearFar[1] - uCameraNearFar[0]);
      }
    `)):e.vertex.code.add(Zo`
      void forwardLinearDepth() {}
    `)}function ea(e){e.vertex.code.add(Zo`
    const float PI = 3.141592653589793;
  `),e.fragment.code.add(Zo`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)}function ta(e){const t=e.fragment.code;t.add(Zo`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),t.add(Zo`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),t.add(Zo`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function ra(e,t){const r=e.fragment.code;e.include(ea),3===t.pbrMode||4===t.pbrMode?(r.add(Zo`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(Zo`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),r.add(Zo`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),r.add(Zo`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),r.add(Zo`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(ta),r.add(Zo`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),r.add(Zo`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),r.add(Zo`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),r.add(Zo`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),r.add(Zo`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),r.add(Zo`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}function ia(e){e.vertex.code.add(Zo`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}function oa(e){const t=Zo`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;e.fragment.code.add(t),e.vertex.code.add(t)}function na(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(Zo`
      vec3 normalModel() {
        return normal;
      }
    `)),1===t.normalType&&(e.include(oa),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(Zo`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(Zo`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}function aa(e){e.attributes.add("position","vec3"),e.vertex.code.add(Zo`
    vec3 positionModel() { return position; }
  `)}function sa(e){e.vertex.code.add(Zo`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${Zo.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${Zo.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${Zo.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${Zo.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function ca(e,t){t.symbolColor?(e.include(sa),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(Zo`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `):e.vertex.code.add(Zo`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)}function la(e,t){e.include(aa),e.vertex.include(In,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(Zo`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(Zo`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `)}function da(e,t){0===t.normalType||1===t.normalType?(e.include(na,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(Zo`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===t.normalType?(e.include(la,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(Zo`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?Zo`normalize(vPositionWorldCameraRelative);`:Zo`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(Zo`
      void forwardNormal() {}
    `)}function ua(e,t){e.fragment.include(Sn),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(Zo`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)):1===t.output&&e.fragment.code.add(Zo`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `)}function fa(e,t){const r=e.vertex.code,i=e.fragment.code;1!==t.output&&3!==t.output||(e.include(Vn,{linearDepth:!0}),e.include(Bn,t),e.include(gn,t),e.include(ua,t),e.include(mn,t),e.vertex.uniforms.add("nearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(Zo`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(tn,t),i.add(Zo`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?Zo`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(Vn,{linearDepth:!1}),e.include(na,t),e.include(da,t),e.include(Bn,t),e.include(gn,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(Zo`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?Zo`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(mn,t),e.include(tn,t),i.add(Zo`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?Zo`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?Zo`
            vec3 normal = screenDerivativeNormal(vPositionView);`:Zo`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(Vn,{linearDepth:!1}),e.include(Bn,t),e.include(gn,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(Zo`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(mn,t),e.include(tn,t),e.include(vn),i.add(Zo`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?Zo`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function ma(e,t){const r=e.fragment;r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),t.vertexTangets?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(Zo`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `):r.code.add(Zo`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(Zo`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)),0!==t.attributeTextureCoordinates&&(e.include(Nn,t),r.code.add(Zo`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function pa(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(Zo`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):r.code.add(Zo`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `)}function ha(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(Zo`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===i?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(Zo`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec4 sh0 = vec4(
          0.282095,
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y
        );
        vec3 ambientLight = vec3(
          dot(lightingAmbientSH_R, sh0),
          dot(lightingAmbientSH_G, sh0),
          dot(lightingAmbientSH_B, sh0)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):2===i&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(Zo`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;

        vec4 sh1 = vec4(
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y,
          1.092548 * normal.x * normal.y
        );
        vec4 sh2 = vec4(
          1.092548 * normal.y * normal.z,
          0.315392 * (3.0 * normal.z * normal.z - 1.0),
          1.092548 * normal.x * normal.z,
          0.546274 * (normal.x * normal.x - normal.y * normal.y)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R1, sh1),
          dot(lightingAmbientSH_G1, sh1),
          dot(lightingAmbientSH_B1, sh1)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R2, sh2),
          dot(lightingAmbientSH_G2, sh2),
          dot(lightingAmbientSH_B2, sh2)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(Zo`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))}function va(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(Zo`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)}function ga(e,t){const r=e.fragment;e.include(va),e.include(pa,t),0!==t.pbrMode&&e.include(ra,t),e.include(ha,t),t.receiveShadows&&e.include(Cn,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(ea),r.code.add(Zo`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),t.useOldSceneLightInterface?r.code.add(Zo`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `):(1===t.viewingMode?r.code.add(Zo`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `):r.code.add(Zo`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),r.code.add(Zo`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===t.pbrMode||4===t.pbrMode?r.code.add(Zo`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(Zo`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
        vec3 viewDirection = -viewDir;
        vec3 mainLightDirection = -lightingMainDirection;
        vec3 h = normalize(viewDirection + mainLightDirection);

        PBRShadingInfo inputs;
        inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
        inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
        inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
        inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
        inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
        vec3 reflectedView = normalize(reflect(viewDirection, normal));
        inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);

        inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
        inputs.ssao = ssao;

        inputs.metalness = mrr[0];
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `),r.code.add(Zo`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),r.code.add(Zo`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),r.code.add(Zo`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `),r.code.add(Zo`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?Zo`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:Zo`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)))}function xa(e,t){const r=e.fragment;r.code.add(Zo`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),1===t.doubleSidedMode?r.code.add(Zo`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `):2===t.doubleSidedMode?r.code.add(Zo`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `):r.code.add(Zo`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `)}function ba(e,t){Zo`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `}function ya(e){e.code.add(Zo`
    vec4 premultiplyAlpha(vec4 v) {
      return vec4(v.rgb * v.a, v.a);
    }

    // Note: the min in the last line has been added to fix an instability in chrome.
    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911
    // With proper floating point handling, the value could never be >1.
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float rgb2v(vec3 c) {
      return max(c.x, max(c.y, c.z));
    }
  `)}function wa(e){e.include(ya),e.code.add(Zo`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${Zo.int(1)}) {
        return allMixed;
      }
      else if (mode == ${Zo.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${Zo.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${Zo.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${Zo.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}function _a(e){const t=new jn,r=t.vertex.code,i=t.fragment.code;return t.include(ba,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(aa),t.varyings.add("vpos","vec3"),t.include(gn,e),t.include(Fn,e),t.include(bn,e),0!==e.output&&7!==e.output||(t.include(na,e),t.include(Vn,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(ia),t.include(ma,e),t.include(da,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(Bn,e),t.include(Zn,e),t.include(ca,e),t.include(Yn,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(Zo`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${Zo.float(.001)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?Zo`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(mn,e),t.include(tn,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(wa),i.add(Zo`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?Zo`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Zo`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?Zo`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Zo`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(mn,e),t.include(ga,e),t.include(pa,e),t.include(tn,e),e.receiveShadows&&t.include(Cn,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(En,e),t.include(ra,e),t.fragment.include(wa),t.include(xa,e),i.add(Zo`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?Zo`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Zo`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?Zo`
        vec3 normal = screenDerivativeNormal(localvpos);`:Zo`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?Zo`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Zo`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?Zo`
              mat3 tangentSpace = ${e.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?Zo`vec3 normalGround = normalize(vpos + localOrigin);`:Zo`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Zo``}
        ${1===e.pbrMode||2===e.pbrMode?Zo`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(fa,e),t}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=Ze(),this.worldFromModel_TH=m(),this.worldFromModel_TL=m()}},e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=m(),this.worldFromView_TL=m(),this.viewFromCameraRelative_RS=Ze(),this.projFromView=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(la||(la={})),(da||(da={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)};var Ta=Object.freeze({__proto__:null,build:_a});class Sa extends class{constructor(e,t){t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),e.commonUniformStore&&(this._commonUniformStore=e.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program)),this._pipeline=this.initializePipeline(e)}dispose(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),this._program=null)}reload(e){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose()),this._program=this.initializeProgram(e),this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t,r){}bindMaterial(e,t,r){}bindDraw(e,t,r){}bindPipelineState(e){e.setPipelineState(this.pipeline)}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}}{initializeProgram(e){const t=Sa.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangets:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Rn(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1});return new Ot(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),qo)}bindPass(e,t,r){un.bindProjectionMatrix(this.program,r.camera.projectionMatrix);const i=this.configuration.output;7===i&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",Go[t.colorMixMode])),0===i?(r.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",Go[t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&En.bindUniforms(this.program,t,this.configuration.isSchematic)):1===i||3===i?this.program.setUniform2fv("nearFar",r.camera.nearFar):4===i&&vn.bindOutputHighlight(e,this.program,r),gn.bindUniformsForSymbols(this.program,t),bn.bindUniforms(this.program,t,r),Uo(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?A(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;un.bindViewCustomOrigin(this.program,t,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&un.bindCamPosition(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Fn.bindCustomOrigin(this.program,t),mn.bindUniforms(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&Cn.bindViewCustomOrigin(this.program,e,t)}setPipeline(e,t){const r=this.configuration,i=3===e,o=2===e;return de({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?rn:(n=e,2===n?null:1===n?nn:on),culling:Ca(r),depthTest:{func:cn(e)},depthWrite:i||o?r.writeDepth&&ue:null,colorWrite:fe,stencilWrite:r.sceneHasOcludees?wn:null,stencilTest:r.sceneHasOcludees?t?Tn:_n:null,polygonOffset:i||o?null:sn(r.enableOffset)});var n}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}Sa.shader=new ln(Ta,(()=>import("./DefaultMaterial.glsl.bbb8cb7d.js")));const Ca=e=>{return((t=e).cullFace?0!==t.cullFace:!t.slicePlaneEnabled&&!t.transparent&&!t.doubleSidedMode)&&{face:1===e.cullFace?1028:1029,mode:2305};var t};class Ma extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map((()=>0))}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3}}function Oa(e){const t=new jn,r=t.vertex.code,i=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(aa),t.varyings.add("vpos","vec3"),t.include(gn,e),t.include(Fn,e),t.include(bn,e),0!==e.output&&7!==e.output||(t.include(na,e),t.include(Vn,{linearDepth:!1}),e.offsetBackfaces&&t.include(ia),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),t.include(Bn,e),t.include(Zn,e),t.include(ca,e),t.include(Yn,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(Zo`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${Zo.float(.001)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(mn,e),t.include(tn,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(wa),i.add(Zo`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?Zo`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Zo`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?Zo`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Zo`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(mn,e),t.include(ga,e),t.include(pa,e),t.include(tn,e),e.receiveShadows&&t.include(Cn,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(En,e),t.include(ra,e),t.fragment.include(wa),i.add(Zo`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?Zo`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Zo`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?Zo`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Zo`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${Zo`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?Zo`vec3 normalGround = normalize(vpos + localOrigin);`:Zo`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Zo``}
        ${1===e.pbrMode||2===e.pbrMode?Zo`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(fa,e),t}le([dn({count:8})],Ma.prototype,"output",void 0),le([dn({count:4})],Ma.prototype,"alphaDiscardMode",void 0),le([dn({count:3})],Ma.prototype,"doubleSidedMode",void 0),le([dn()],Ma.prototype,"isSchematic",void 0),le([dn()],Ma.prototype,"vertexColors",void 0),le([dn()],Ma.prototype,"offsetBackfaces",void 0),le([dn()],Ma.prototype,"symbolColors",void 0),le([dn()],Ma.prototype,"vvSize",void 0),le([dn()],Ma.prototype,"vvColor",void 0),le([dn()],Ma.prototype,"verticalOffset",void 0),le([dn()],Ma.prototype,"receiveShadows",void 0),le([dn()],Ma.prototype,"slicePlaneEnabled",void 0),le([dn()],Ma.prototype,"sliceHighlightDisabled",void 0),le([dn()],Ma.prototype,"receiveAmbientOcclusion",void 0),le([dn()],Ma.prototype,"screenSizePerspective",void 0),le([dn()],Ma.prototype,"textureAlphaPremultiplied",void 0),le([dn()],Ma.prototype,"hasColorTexture",void 0),le([dn()],Ma.prototype,"usePBR",void 0),le([dn()],Ma.prototype,"hasMetalnessAndRoughnessTexture",void 0),le([dn()],Ma.prototype,"hasEmissionTexture",void 0),le([dn()],Ma.prototype,"hasOcclusionTexture",void 0),le([dn()],Ma.prototype,"hasNormalTexture",void 0),le([dn()],Ma.prototype,"instanced",void 0),le([dn()],Ma.prototype,"instancedColor",void 0),le([dn()],Ma.prototype,"instancedDoublePrecision",void 0),le([dn()],Ma.prototype,"vertexTangents",void 0),le([dn()],Ma.prototype,"normalsTypeDerivate",void 0),le([dn()],Ma.prototype,"writeDepth",void 0),le([dn()],Ma.prototype,"sceneHasOcludees",void 0),le([dn()],Ma.prototype,"transparent",void 0),le([dn()],Ma.prototype,"enableOffset",void 0),le([dn({count:3})],Ma.prototype,"cullFace",void 0),le([dn({count:4})],Ma.prototype,"transparencyPassType",void 0);var Pa=Object.freeze({__proto__:null,build:Oa});class Aa extends Sa{initializeProgram(e){const t=Aa.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Rn(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1});return new Ot(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),qo)}}Aa.shader=new ln(Pa,(()=>import("./RealisticTree.glsl.2764b6c8.js")));class Ia extends $o{constructor(e,t){super(t,e,La),this.supportsEdges=!0,this.techniqueConfig=new Ma,this.vertexBufferLayout=Ia.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?Ia.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,o=!!t&&t.indexOf("color")>-1,n=e.vvColorEnabled,a="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(o||n||i)?!!a||s:r?a?c:s:o||n||i?!!a||s:a?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<5e5),this.techniqueConfig}intersect(e,t,r,i,o,n,a){if(null!==this.params.verticalOffset){const e=i.camera;S(Ua,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case 1:t=L(Ea,Ua);break;case 2:t=p(Ea,Na)}let a=0;if(null!==this.params.verticalOffset){const r=h(Ha,Ua,e.eye),i=y(r),o=g(r,r,1/i);let n=null;this.params.screenSizePerspective&&(n=v(t,o)),a+=function(e,t,r,i,o){let n=(r.screenLength||0)*e.pixelRatio;o&&(n=Oo(n,i,t,o));const a=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return Y(a*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}(e,i,this.params.verticalOffset,n,this.params.screenSizePerspective)}g(t,t,a),me(Va,t,i.transform.inverseRotation),o=h(Ba,o,Va),n=h(Da,n,Va)}Ro(e,t,i,o,n,function(e){return B(e)?(go.offset=e,go):null}(i.verticalOffset),a)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new Ra(e)}createBufferWriter(){return new za(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=at().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=at();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class Ra extends Mo{constructor(e){const t=e.material;super(n(n({},e),t.params)),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting(Aa,this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting(Sa,this.material.getTechniqueConfig(this.output,e),this.technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program)}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const Fa=2.1,La=n({textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Ze(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:.1,textureAlphaPremultiplied:!1,sceneHasOcludees:!1},{renderOccluded:1});class za{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.position.length}write(e,t,r,i){!function(e,t,r,i,o,n){for(const a of t.fieldNames){const t=e.vertexAttr[a],s=e.indices[a];if(t&&s)switch(a){case M.POSITION:{P(3===t.size);const e=o.getField(a,ot);e&&Ko(s,t.data,r,e,n);break}case M.NORMAL:{P(3===t.size);const e=o.getField(a,ot);e&&Qo(s,t.data,i,e,n);break}case M.UV0:{P(2===t.size);const e=o.getField(a,nt);e&&Wo(s,t.data,e,n);break}case M.UVMAPSPACE:{P(4===t.size);const e=o.getField(a,rt);e&&Jo(s,t.data,e,n);break}case M.MEANVERTEXPOSITION:{P(3===t.size);const e=o.getField(a,ot);e&&Ko(s,t.data,r,e,n);break}case M.BOUND1:case M.BOUND2:case M.BOUND3:{P(3===t.size);const e=o.getField(a,ot);e&&Ko(s,t.data,r,e,n);break}case M.COLOR:{P(3===t.size||4===t.size);const e=o.getField(a,it);e&&Yo(s,t.data,t.size,e,n);break}case M.SYMBOLCOLOR:{P(3===t.size||4===t.size);const e=o.getField(a,it);e&&Yo(s,t.data,t.size,e,n);break}case M.TANGENT:{P(4===t.size);const e=o.getField(a,rt);e&&Jo(s,t.data,e,n);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}const Ba=m(),Da=m(),Na=A(0,0,1),Ea=m(),Va=m(),Ua=m(),Ha=m(),ja=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],Ga=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];const ka=a.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function qa(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const $a=qa("DXT1"),Wa=qa("DXT3"),Xa=qa("DXT5");function Ja(e,t,r,i){const{textureData:o,internalFormat:n,width:a,height:s}=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return ka.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return ka.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,n;switch(i){case $a:o=8,n=33776;break;case Wa:o=16,n=33778;break;case Xa:o=16,n=33779;break;default:return ka.error("Unsupported FourCC code:",(a=i,String.fromCharCode(255&a,a>>8&255,a>>16&255,a>>24&255))),null}var a;let s=1,c=r[4],l=r[3];0==(3&c)&&0==(3&l)||(ka.warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,l=l+3&-4);const d=c,u=l;let f,m;131072&r[2]&&!1!==t&&(s=Math.max(1,r[7])),1===s||he(c)&&he(l)||(ka.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let p=r[1]+4;const h=[];for(let v=0;v<s;++v)m=(c+3>>2)*(l+3>>2)*o,f=new Uint8Array(e,p,m),h.push(f),p+=m,c=Math.max(1,c>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:h},internalFormat:n,width:d,height:u}}(r,i);t.samplingMode=o.levels.length>1?9987:9729,t.hasMipmap=o.levels.length>1,t.internalFormat=n,t.width=a,t.height=s;const c=new pe(e,t,o);return e.bindTexture(c,0),c}class Ka{constructor(e,t,r){this.data=e,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new ve,this.data=e,this.id=Ka.idGen.gen(t),this.params=r||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=Ka.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;R(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){ge(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){xe(e.src)||ge(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if(R(e))return 0;if(be(e)||ye(e))return e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Ka.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){const t=this.params.mipmap&&!this.params.disableAnisotropy;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:t?e.parameters.maxMaxAnisotropy:void 0}}load(e,t){if(B(this.glTexture))return this.glTexture;if(B(this.loadingPromise))return this.loadingPromise;const r=this.data;return R(r)?(this.glTexture=new pe(e,this.createDescriptor(e),null),e.bindTexture(this.glTexture,0),this.glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):(be(r)||ye(r))&&this.params.encoding===Ka.DDS_ENCODING?this.loadFromDDSData(e,r):ye(r)?this.loadFromPixelData(e,r):be(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||R(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(B(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:o}=this.powerOfTwoStretchInfo;o.setData(this.data),this.drawStretchedTexture(e,t,r,i,o,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this.glTexture.descriptor;e!==r||t!==i?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=Ja(e,this.createDescriptor(e),t,this.params.mipmap),e.bindTexture(this.glTexture,0),this.glTexture}loadFromPixelData(e,t){P(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new pe(e,r,t),e.bindTexture(this.glTexture,0),this.glTexture}async loadAsync(e){const t=we();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const i=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(i,i),r}loadFromURL(e,t,r){return this.loadAsync((async i=>{const o=await At(r,{signal:i});return this.loadFromImage(e,o,t)}))}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync((async i=>{const o=await _e(r,r.src,!1,i);return this.loadFromImage(e,o,t)}))}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync((i=>Te(((o,n)=>{const a=()=>{r.removeEventListener("loadeddata",s),r.removeEventListener("error",c),B(l)&&l.remove()},s=()=>{r.readyState>=2&&(a(),o(this.loadFromImage(e,r,t)))},c=e=>{a(),n(e||new Se("Failed to load video"))};r.addEventListener("loadeddata",s),r.addEventListener("error",c);const l=Ce(i,(()=>c(Me())))}))))}loadFromImage(e,t,r){const i=Ka.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const o=this.createDescriptor(e);return o.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,o)||he(i.width)&&he(i.height)?(o.width=i.width,o.height=i.height,this.glTexture=new pe(e,o,t),e.bindTexture(this.glTexture,0),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,i,o,r),e.bindTexture(this.glTexture,0),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!Oe(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(e,t,r,i,o){const{width:n,height:a}=r,s=Pe(n),c=Pe(a);let l;switch(i.width=s,i.height=c,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[n/s,a/c],l=new pe(e,i),l.updateData(0,0,0,n,a,t);break;case 1:case null:case void 0:l=this.stretchToPowerOfTwo(e,t,i,o);break;default:Ae(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&l.generateMipmap(),l}stretchToPowerOfTwo(e,t,r,i){const o=new pe(e,r),n=new oe(e,{colorTarget:0,depthStencilTarget:0},o),a=new pe(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=ja,r=qo,i=-1,o=1){let n=null;switch(t){case Ga:n=new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]);break;case ja:default:n=new Float32Array([i,i,o,i,i,o,o,o])}return new ae(e,r,{geometry:t},{geometry:ne.createVertex(e,35044,n)})}(e);return this.drawStretchedTexture(e,i,n,s,a,o),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:n}:(s.dispose(!0),a.dispose(),n.detachColorTexture(),e.bindFramebuffer(null),n.dispose()),o}drawStretchedTexture(e,t,r,i,o,n){e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height);const s=t.program;e.bindProgram(s),s.setUniform4f("color",1,1,1,1),s.setUniform1i("tex",0),e.bindTexture(o,0),e.bindVAO(i),e.setPipelineState(t.pipeline),e.drawArrays(5,0,Ie(i,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height)}unload(){if(B(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if(B(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),B(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}Ka.idGen=new vr,Ka.DDS_ENCODING="image/vnd-ms.dds";class Qa{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return xe(e)?(Re(t),Fe(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if(R(this.streamDataRequester))return(await Le(t,{responseType:Ya[e]})).data;const i=await ze(this.streamDataRequester.request(t,e,r));if(!0===i.ok)return i.value;throw Be(i.error),new Se("",`Request for resource failed: ${i.error}`)}}const Ya={image:"image",binary:"array-buffer",json:"json"};function Za(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*o,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let d=0;d<s;++d)i[c]=n[l],i[c+1]=n[l+1],c+=o,l+=a}function es(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*o,l=(r&&r.srcIndex?r.srcIndex:0)*a;if(st(t.elementType)){const e=ct(t.elementType);if(lt(t.elementType))for(let t=0;t<s;++t)i[c]=Math.max(n[l]/e,-1),i[c+1]=Math.max(n[l+1]/e,-1),c+=o,l+=a;else for(let t=0;t<s;++t)i[c]=n[l]/e,i[c+1]=n[l+1]/e,c+=o,l+=a}else Za(e,t,r);return e}function ts(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*o,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let d=0;d<s;++d)i[c]=n[l],i[c+1]=n[l+1],i[c+2]=n[l+2],c+=o,l+=a}function rs(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*o,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let d=0;d<s;++d)i[c]=n[l],i[c+1]=n[l+1],i[c+2]=n[l+2],i[c+3]=n[l+3],c+=o,l+=a}function is(e,t,r,i,o,n){const a=e.typedBuffer,s=e.typedBufferStride,c=n?n.count:e.count;let l=(n&&n.dstIndex?n.dstIndex:0)*s;for(let d=0;d<c;++d)a[l]=t,a[l+1]=r,a[l+2]=i,a[l+3]=o,l+=s}function os(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let i=0;i<r;i++)t[i]=e.get(i);return t}function ns(e,t){return new e(new ArrayBuffer(t*e.ElementCount*dt(e.ElementType)))}Object.freeze({__proto__:null,copy:Za,normalizeIntegerBuffer:es}),Object.freeze({__proto__:null,copy:ts}),Object.freeze({__proto__:null,copy:rs,fill:is}),Object.freeze({__proto__:null,copy:function(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*o,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let d=0;d<s;++d){for(let e=0;e<9;++e)i[c+e]=n[l+e];c+=o,l+=a}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*o,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let d=0;d<s;++d){for(let e=0;e<16;++e)i[c+e]=n[l+e];c+=o,l+=a}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*o,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let d=0;d<s;++d)i[c]=n[l],c+=o,l+=a},makeDense:os});const as=a.getLogger("esri.views.3d.glTF");class ss{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new Se(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new ss(this.major,this.minor,this._context)}static parse(e,t=""){const[r,i]=e.split("."),o=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(o))throw new Se((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!i||!i.match||!i.match(o))throw new Se((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const n=parseInt(r,10),a=parseInt(i,10);return new ss(n,a,t)}}class cs{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const ls={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},ds={pbrMetallicRoughness:ls,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},us={ESRI_externalColorMixMode:"tint"},fs=(e={})=>{const t=n(n({},ls),e.pbrMetallicRoughness),r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:Ae(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}(n(n({},us),e.extras));return n(n(n({},ds),e),{pbrMetallicRoughness:t,extras:r})},ms={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};class ps{constructor(e,t,r,i,o){this.context=e,this.errorContext=t,this.uri=r,this.json=i,this.glbBuffer=o,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,i,o)=>(t=i||"",r=o||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==i.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==i.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==i.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,i){if(xe(r)){const i=Ne(r);if("model/gltf-binary"!==i.mediaType)try{const o=JSON.parse(i.isBase64?atob(i.data):i.data);return new ps(e,t,r,o)}catch(a){}const o=Fe(r);if(ps.isGLBData(o))return this.fromGLBData(e,t,r,o)}if(r.endsWith(".gltf")){const o=await e.loadJSON(r,i);return new ps(e,t,r,o)}const o=await e.loadBinary(r,i);if(ps.isGLBData(o))return this.fromGLBData(e,t,r,o);const n=await e.loadJSON(r,i);return new ps(e,t,r,n)}static isGLBData(e){const t=new cs(e);return t.remainingBytes()>=4&&1179937895===t.readUint32()}static async fromGLBData(e,t,r,i){const o=await ps.parseGLBData(t,i);return new ps(e,t,r,o.json,o.binaryData)}static async parseGLBData(e,t){const r=new cs(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const i=r.readUint32(),o=r.readUint32(),n=r.readUint32();e.assert(1179937895===i,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=n,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==o,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,s,c=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),i=r.readUint32();0===c?(e.assert(1313821514===i,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await ys(r.readUint8Array(t))):1===c?(e.errorUnsupportedIf(5130562!==i,"Second GLB chunk expected to be BIN."),s=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),c+=1}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:s}}async getBuffer(e,t){const r=this.json.buffers[e],i=this.errorContext;if(null==r.uri)return i.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let o=this.bufferCache.get(e);if(!o){const n=await this.context.loadBinary(this.resolveUri(r.uri),t);o=new Uint8Array(n),this.bufferCache.set(e,o),i.assert(o.byteLength===r.byteLength,"Buffer byte lengths should match.")}return o}async getAccessor(e,t){const r=this.json.accessors[e],i=this.errorContext;i.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),i.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const o=this.json.bufferViews[r.bufferView],n=await this.getBuffer(o.buffer,t),a=xs[r.type],s=bs[r.componentType],c=a*s,l=o.byteStride||c;return{raw:n.buffer,byteStride:l,byteOffset:n.byteOffset+(o.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:l===c,componentCount:a,componentByteSize:s,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return os(this.wrapAccessor(mt,r));case 5123:return os(this.wrapAccessor(ft,r));case 5125:return os(this.wrapAccessor(ut,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const i=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==i.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+ws[i.componentType]),r.errorUnsupportedIf(3!==i.componentCount,"POSITION vertex attribute must have 3 components, but found "+i.componentCount.toFixed()),this.wrapAccessor(ot,i)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const i=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==i.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+ws[i.componentType]),r.errorUnsupportedIf(3!==i.componentCount,"NORMAL vertex attribute must have 3 components, but found "+i.componentCount.toFixed()),this.wrapAccessor(ot,i)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const i=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==i.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+ws[i.componentType]),r.errorUnsupportedIf(4!==i.componentCount,"TANGENT vertex attribute must have 4 components, but found "+i.componentCount.toFixed()),new rt(i.raw,i.byteOffset,i.byteStride,i.byteOffset+i.byteStride*i.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const i=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==i.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+i.componentCount.toFixed()),5126===i.componentType?this.wrapAccessor(nt,i):(r.errorUnsupportedIf(!i.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new xt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new gt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new vt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new ht(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new pt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new nt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void Ae(e.componentType)}}(i))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const i=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==i.componentCount&&3!==i.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+i.componentCount.toFixed()),4===i.componentCount){if(5126===i.componentType)return this.wrapAccessor(rt,i);if(5121===i.componentType)return this.wrapAccessor(it,i);if(5123===i.componentType)return this.wrapAccessor(bt,i)}else if(3===i.componentCount){if(5126===i.componentType)return this.wrapAccessor(ot,i);if(5121===i.componentType)return this.wrapAccessor(yt,i);if(5123===i.componentType)return this.wrapAccessor(wt,i)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+ws[i.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t){const r=this.errorContext;let i=this.materialCache.get(e.material);if(!i){const o=null!=e.material?fs(this.json.materials[e.material]):fs(),n=o.pbrMetallicRoughness,a=this.hasVertexColors(e);let s,c,l,d,u;n.baseColorTexture&&(r.errorUnsupportedIf(0!==(n.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),s=await this.getTexture(n.baseColorTexture.index,t)),o.normalTexture&&(0!==(o.normalTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):c=await this.getTexture(o.normalTexture.index,t)),o.occlusionTexture&&(0!==(o.occlusionTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):l=await this.getTexture(o.occlusionTexture.index,t)),o.emissiveTexture&&(0!==(o.emissiveTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):d=await this.getTexture(o.emissiveTexture.index,t)),n.metallicRoughnessTexture&&(0!==(n.metallicRoughnessTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):u=await this.getTexture(n.metallicRoughnessTexture.index,t));const f=null!=e.material?e.material:-1;i={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:n.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:s,normalTexture:c,name:o.name,id:f,occlusionTexture:l,emissiveTexture:d,emissiveFactor:o.emissiveFactor,metallicFactor:n.metallicFactor,roughnessFactor:n.roughnessFactor,metallicRoughnessTexture:u,vertexColors:a,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return i}async getTexture(e,t){const r=this.errorContext,i=this.json.textures[e],o=(e=>n(n({},ms),e))(null!=i.sampler?this.json.samplers[i.sampler]:{});r.errorUnsupportedIf(null==i.source,"Source is expected to be defined for a texture.");const a=this.json.images[i.source];let s=this.textureCache.get(e);if(!s){let i;if(a.uri)i=await this.context.loadImage(this.resolveUri(a.uri),t);else{r.errorUnsupportedIf(null==a.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==a.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[a.bufferView],o=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),i=await async function(e,t){return Te(((r,i)=>{const o=new Blob([e],{type:t}),n=URL.createObjectURL(o),a=new Image;a.addEventListener("load",(()=>{URL.revokeObjectURL(n),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))):r(a)})),a.addEventListener("error",(e=>{URL.revokeObjectURL(n),i(e)})),a.src=n}))}(new Uint8Array(o.buffer,o.byteOffset+(e.byteOffset||0),e.byteLength),a.mimeType)}s={data:i,wrapS:o.wrapS,wrapT:o.wrapT,minFilter:o.minFilter,name:a.name,id:e},this.textureCache.set(e,s)}return s}getNodeTransform(e){if(void 0===e)return vs;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),i=this.json.nodes[e];i.matrix?t=W([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],r,i.matrix):i.translation||i.rotation||i.scale?(t=Rt(r),i.translation&&re(t,t,i.translation),i.rotation&&(gs[3]=et(gs,i.rotation),G(t,t,gs[3],gs)),i.scale&&Ee(t,t,i.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return Ve(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=ss.parse(this.json.asset.version,"glTF");hs.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}}const hs=new ss(2,0,"glTF"),vs=De([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Math.PI/2),gs=tt(),xs={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},bs={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function ys(e){return Te(((t,r)=>{const i=new Blob([e]),o=new FileReader;o.onload=()=>{const e=o.result;t(JSON.parse(e))},o.onerror=e=>{r(e)},o.readAsText(i)}))}const ws={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let _s=0;function Ts(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;B(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}function Ss(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function Cs(e,t,r){const i=t=>{const i=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(i)){const r=function(e,t={}){return{data:e,parameters:n({wrap:n({s:10497,t:10497},t.wrap),noUnpackFlip:!0,mipmap:!1},t)}}(t.data,{wrap:{s:Ms(t.wrapS),t:Ms(t.wrapT)},mipmap:Ps.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(i,r)}return i},o=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(o)){const r=function(e={}){return n({color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply"},e)}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?i(t.colorTexture):void 0,textureNormal:t.normalTexture?i(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?i(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?i(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?i(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(o,r)}return o}function Ms(e){if(33071===e||33648===e||10497===e)return e;Os.error(`Unexpected TextureSampler WrapMode: ${e}`)}const Os=new class{error(e){throw new Se("gltf-loader-error",e)}errorUnsupported(e){throw new Se("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){as.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},Ps=[9987,9985],As=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];function Is(e){return"number"==typeof e?function(e){return lr(e)}(e):He(e)||ye(e)?new Uint32Array(e):e}const Rs=a.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Fs(e){throw new Se("",`Request for object resource failed: ${e}`)}function Ls(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Rs.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Rs.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Rs.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Rs.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Rs.warn("Indexed geometries must specify faces"),i=!1;break}default:Rs.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Rs.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const n in o)o[n].values||(Rs.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function zs(e){const t=Mt();return e.forEach((e=>{const r=e.boundingInfo;Ct(t,r.getBBMin()),Ct(t,r.getBBMax())})),t}async function Bs(e,t){const r=[];for(const n in e){const i=e[n],o=i.images[0].data;if(!o){Rs.warn("Externally referenced texture data is not yet supported");continue}const a=i.encoding+";base64,"+o,s="/textureDefinitions/"+n,c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},l=B(t)&&t.disableTextures?qe(null):At(a,t);r.push(l.then((e=>({refId:s,image:e,params:c,alphaChannelUsage:"rgba"===i.channels?i.alphaChannelUsage||"transparency":"none"}))))}const i=await Ue(r),o={};for(const n of i)o[n.refId]=n;return o}function Ds(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function Ns(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}function Es(e){const t=new Uint32Array(e);for(let r=0;r<e;r++)t[r]=r;return t}const Vs=new ss(1,2,"wosr");function Us(e,t,r){if(e.count!==t.count)return void Lt.error("source and destination buffers need to have the same number of elements");const i=e.count,o=r[0],n=r[1],a=r[2],s=r[3],c=r[4],l=r[5],d=r[6],u=r[7],f=r[8],m=e.typedBuffer,p=e.typedBufferStride,h=t.typedBuffer,v=t.typedBufferStride;for(let g=0;g<i;g++){const e=g*p,t=g*v,r=h[t],i=h[t+1],x=h[t+2],b=h[t+3];m[e]=o*r+s*i+d*x,m[e+1]=n*r+c*i+u*x,m[e+2]=a*r+l*i+f*x,m[e+3]=b}}function Hs(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<i;c++){const e=c*n,t=c*s;o[e]=r*a[t],o[e+1]=r*a[t+1],o[e+2]=r*a[t+2],o[e+3]=r*a[t+3]}}function js(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Gs(e,t,r,i){const o=e.model,a=Ze(),s=new Array,c=new Map,l=new Map;return o.lods.forEach(((e,d)=>{if(void 0!==i&&d!==i)return;let u=0;const f={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:B(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Mt()};s.push(f),e.parts.forEach((i=>{const s=i.material+(i.attributes.normal?"_normal":"")+(i.attributes.color?"_color":"")+(i.attributes.texCoord0?"_texCoord0":"")+(i.attributes.tangent?"_tangent":""),d=o.materials.get(i.material),m=B(i.attributes.texCoord0),p=B(i.attributes.normal);if(!c.has(s)){if(m){if(B(d.textureColor)&&!l.has(d.textureColor)){const e=o.textures.get(d.textureColor),t=n(n({},e.parameters),{preMultiplyAlpha:!0});l.set(d.textureColor,new Ka(e.data,d.textureColor,t))}if(B(d.textureNormal)&&!l.has(d.textureNormal)){const e=o.textures.get(d.textureNormal),t=n(n({},e.parameters),{preMultiplyAlpha:!0});l.set(d.textureNormal,new Ka(e.data,d.textureNormal,t))}if(B(d.textureOcclusion)&&!l.has(d.textureOcclusion)){const e=o.textures.get(d.textureOcclusion),t=n(n({},e.parameters),{preMultiplyAlpha:!0});l.set(d.textureOcclusion,new Ka(e.data,d.textureOcclusion,t))}if(B(d.textureEmissive)&&!l.has(d.textureEmissive)){const e=o.textures.get(d.textureEmissive),t=n(n({},e.parameters),{preMultiplyAlpha:!0});l.set(d.textureEmissive,new Ka(e.data,d.textureEmissive,t))}if(B(d.textureMetallicRoughness)&&!l.has(d.textureMetallicRoughness)){const e=o.textures.get(d.textureMetallicRoughness),t=n(n({},e.parameters),{preMultiplyAlpha:!0});l.set(d.textureMetallicRoughness,new Ka(e.data,d.textureMetallicRoughness,t))}}const e=Math.pow(d.color[0],1/Fa),a=Math.pow(d.color[1],1/Fa),u=Math.pow(d.color[2],1/Fa),f=Math.pow(d.emissiveFactor[0],1/Fa),h=Math.pow(d.emissiveFactor[1],1/Fa),v=Math.pow(d.emissiveFactor[2],1/Fa);c.set(s,new Ia(n(n(n({},t),{transparent:"BLEND"===d.alphaMode,textureAlphaMode:ks(d.alphaMode),textureAlphaCutoff:d.alphaCutoff,diffuse:[e,a,u],ambient:[e,a,u],opacity:d.opacity,doubleSided:d.doubleSided,doubleSidedType:"winding-order",cullFace:d.doubleSided?0:2,vertexColors:!!i.attributes.color,vertexTangents:!!i.attributes.tangent,normals:p?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:B(d.textureColor)&&m?l.get(d.textureColor).id:void 0,colorMixMode:d.colorMixMode,normalTextureId:B(d.textureNormal)&&m?l.get(d.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:B(d.textureOcclusion)&&m?l.get(d.textureOcclusion).id:void 0,emissiveTextureId:B(d.textureEmissive)&&m?l.get(d.textureEmissive).id:void 0,metallicRoughnessTextureId:B(d.textureMetallicRoughness)&&m?l.get(d.textureMetallicRoughness).id:void 0,emissiveFactor:[f,h,v],mrrFactors:[d.metallicFactor,d.roughnessFactor,t.mrrFactors[2]],isSchematic:!1}),r),s))}const h=function(e,t){switch(t){case 4:return Is(e);case 5:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint32Array(0);const r=t-2,i=new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(i[e++]=t,i[e++]=t+1,i[e++]=t+2):(i[e++]=t+1,i[e++]=t,i[e++]=t+2)}else{let t=0;for(let o=0;o<r;o+=1)if(o%2==0){const r=e[o],n=e[o+1],a=e[o+2];i[t++]=r,i[t++]=n,i[t++]=a}else{const r=e[o+1],n=e[o],a=e[o+2];i[t++]=r,i[t++]=n,i[t++]=a}}return i}(e);case 6:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint32Array(0);const r=t-2,i=new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)i[e++]=0,i[e++]=t+1,i[e++]=t+2;return i}{const t=e[0];let o=e[1],n=0;for(let a=0;a<r;++a){const r=e[a+2];i[n++]=t,i[n++]=o,i[n++]=r,o=r}return i}}(e)}}(i.indices||i.attributes.position.count,i.primitiveType),v={},g={},x=i.attributes.position.count,b=ns(ot,x);if(zt(b,i.attributes.position,i.transform),g.position={data:b.typedBuffer,size:b.elementCount},v.position=h,B(i.attributes.normal)){const e=ns(ot,x);Je(a,i.transform),Bt(e,i.attributes.normal,a),g.normal={data:e.typedBuffer,size:e.elementCount},v.normal=h}if(B(i.attributes.tangent)){const e=ns(rt,x);Je(a,i.transform),Us(e,i.attributes.tangent,a),g.tangent={data:e.typedBuffer,size:e.elementCount},v.tangent=h}if(B(i.attributes.texCoord0)){const e=ns(nt,x);es(e,i.attributes.texCoord0),g.uv0={data:e.typedBuffer,size:e.elementCount},v.uv0=h}if(B(i.attributes.color)){const e=ns(it,x);if(4===i.attributes.color.elementCount)i.attributes.color instanceof rt?Hs(e,i.attributes.color,255):i.attributes.color instanceof it?rs(e,i.attributes.color):i.attributes.color instanceof bt&&Hs(e,i.attributes.color,1/256);else{is(e,255,255,255,255);const t=new yt(e.buffer,0,4);i.attributes.color instanceof ot?Dt(t,i.attributes.color,255):i.attributes.color instanceof yt?ts(t,i.attributes.color):i.attributes.color instanceof wt&&Dt(t,i.attributes.color,1/256)}g.color={data:e.typedBuffer,size:e.elementCount},v.color=h}const y=new br(new hr(g,v),`gltf_${e.name}_${u++}`);f.stageResources.geometries.push(y),f.stageResources.materials.push(c.get(s)),m&&(B(d.textureColor)&&f.stageResources.textures.push(l.get(d.textureColor)),B(d.textureNormal)&&f.stageResources.textures.push(l.get(d.textureNormal)),B(d.textureOcclusion)&&f.stageResources.textures.push(l.get(d.textureOcclusion)),B(d.textureEmissive)&&f.stageResources.textures.push(l.get(d.textureEmissive)),B(d.textureMetallicRoughness)&&f.stageResources.textures.push(l.get(d.textureMetallicRoughness))),f.numberOfVertices+=x;const w=y.boundingInfo;Ct(f.boundingBox,w.getBBMin()),Ct(f.boundingBox,w.getBBMax())}))})),s}function ks(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void Lt.error("source and destination buffers need to have the same number of elements");const i=e.count,o=r[0],n=r[1],a=r[2],s=r[3],c=r[4],l=r[5],d=r[6],u=r[7],f=r[8],m=r[9],p=r[10],h=r[11],v=r[12],g=r[13],x=r[14],b=r[15],y=e.typedBuffer,w=e.typedBufferStride,_=t.typedBuffer,T=t.typedBufferStride;for(let S=0;S<i;S++){const e=S*w,t=S*T,r=_[t],i=_[t+1],C=_[t+2],M=_[t+3];y[e]=o*r+c*i+f*C+v*M,y[e+1]=n*r+l*i+m*C+g*M,y[e+2]=a*r+d*i+p*C+x*M,y[e+3]=s*r+u*i+h*C+b*M}},transformMat3:Us,scale:Hs,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<i;c++){const e=c*n,t=c*s;o[e]=a[t]>>r,o[e+1]=a[t+1]>>r,o[e+2]=a[t+2]>>r,o[e+3]=a[t+3]>>r}}});var qs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",fetch:async function(e,t){const r=js($e(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):async function(e,t){const r=await async function(e,t){const r=B(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await ze(t.request(e,"json",r));return!0===i.ok?i.value:(Be(i.error),void Fs(i.error.details.url))}(e,r,t);const i=await ze(Le(e,je(t)));return!0===i.ok?i.value.data:(Be(i.error),void Fs(i.error))}(e,t);return{resource:r,textures:await Bs(r.textureDefinitions,t)}}(r.url,t)),i=function(e,t){const r=[],i=[],o=[],n=[],a=e.resource,s=ss.parse(a.version||"1.0","wosr");Vs.validate(s);const c=a.model.name,l=a.model.geometries,d=a.materialDefinitions,u=e.textures;let f=0;const m=new Map;for(let p=0;p<l.length;p++){const e=l[p];if(!Ls(e))continue;const a=Ns(e),s=e.params.vertexAttributes,h={};for(const t in s){const e=s[t],r=e.values;h[t]={data:r,size:e.valuesPerElement}}const v={};if("PerAttributeArray"===e.params.topology){const e=Es(h.position.data.length/h.position.size);for(const t in h)v[t]=e}else{const t=e.params.faces;for(const e in t)v[e]=new Uint32Array(t[e].values)}const g=u&&u[a.texture];if(g&&!m.has(a.texture)){const{image:e,params:t}=g,r=new Ka(e,c,t);n.push(r),m.set(a.texture,r)}const x=m.get(a.texture),b=x?x.id:void 0;let y=o[a.material]?o[a.material][a.texture]:null;if(!y){const e=d[a.material.substring(a.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=g&&g.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n={ambient:Ge(e.diffuse),diffuse:Ge(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:g?Ds(g.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:b,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};B(t)&&t.materialParamsMixin&&ke(n,t.materialParamsMixin),y=new Ia(n,c),o[a.material]||(o[a.material]={}),o[a.material][a.texture]=y}i.push(y);const w=new br(new hr(h,v),c);f+=v.position?v.position.length:0,r.push(w)}return{name:c,stageResources:{textures:n,materials:i,geometries:r},pivotOffset:a.model.pivotOffset,boundingBox:zs(r),numberOfVertices:f,lodThreshold:null}}(e,t);return{lods:[i],referenceBoundingBox:i.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const i=await(t.cache?t.cache.loadGLTF(r.url,t):async function(e,t,r={}){const i=await ps.load(e,Os,t,r),o="gltf_"+_s++,n={lods:[],materials:new Map,textures:new Map,meta:Ts(i)},a=!(!i.json.asset.extras||"symbolResource"!==i.json.asset.extras.ESRI_type);return await async function(e,t){const r=e.json,i=r.scenes[r.scene||0].nodes,o=i.length>1;for(const a of i){const e=r.nodes[a],t=[n(a,0)];if(Ss(e)&&!o){const r=e.extensions.MSFT_lod.ids;t.push(...r.map(((e,t)=>n(e,t+1))))}await Ue(t)}async function n(i,o){const a=r.nodes[i],s=e.getNodeTransform(i);if(Os.warnUnsupportedIf(null!=a.weights,"Morph targets are not supported."),null!=a.mesh){const e=r.meshes[a.mesh];for(const r of e.primitives)await t(r,s,o,e.name)}for(const e of a.children||[])await n(e,o)}}(i,(async(e,t,a,s)=>{const c=void 0!==e.mode?e.mode:4,l=function(e){switch(e){case 4:case 5:case 6:return e;default:return null}}(c);if(R(l))return void Os.warnUnsupported("Unsupported primitive mode ("+As[c]+"). Skipping primitive.");if(!i.hasPositions(e))return void Os.warn("Skipping primitive without POSITION vertex attribute.");const d=await i.getMaterial(e,r),u={transform:Rt(t),attributes:{position:await i.getPositionData(e,r),normal:null,texCoord0:null,color:null,tangent:null},indices:await i.getIndexData(e,r),primitiveType:l,material:Cs(n,d,o)};i.hasNormals(e)&&(u.attributes.normal=await i.getNormalData(e,r)),i.hasTangents(e)&&(u.attributes.tangent=await i.getTangentData(e,r)),i.hasTextureCoordinates(e)&&(u.attributes.texCoord0=await i.getTextureCoordinates(e,r)),i.hasVertexColors(e)&&(u.attributes.color=await i.getVertexColors(e,r));let f=null;B(n.meta)&&B(n.meta.ESRI_lod)&&"screenSpaceRadius"===n.meta.ESRI_lod.metric&&(f=n.meta.ESRI_lod.thresholds[a]),n.lods[a]=n.lods[a]||{parts:[],name:s,lodThreshold:f},n.lods[a].parts.push(u)})),{model:n,meta:{isEsriSymbolResource:a,uri:i.uri},customMeta:{}}}(new Qa(t.streamDataRequester),r.url,t)),o=We(i.model.meta,"ESRI_proxyEllipsoid");i.meta.isEsriSymbolResource&&B(o)&&-1!==i.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const o of i.parts){const i=o.attributes.normal;if(R(i))return;const n=o.attributes.position,a=n.count,s=m(),c=m(),l=m(),d=ns(it,a),u=ns(ot,a),f=U([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],o.transform);for(let m=0;m<a;m++){n.getVec(m,c),i.getVec(m,s),j(c,c,o.transform),h(l,c,t.center),Xe(l,l,t.radius);const a=l[2],p=y(l),v=Math.min(.45+.55*p*p,1);Xe(l,l,t.radius),j(l,l,f),L(l,l),r+1!==e.model.lods.length&&e.model.lods.length>1&&I(l,l,s,a>-1?.2:Math.min(-4*a-3.8,1)),u.setVec(m,l),d.set(m,0,255*v),d.set(m,1,255*v),d.set(m,2,255*v),d.set(m,3,255)}o.attributes.normal=u,o.attributes.color=d}}}(i,o);const a=i.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:i.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:!0,isSchematic:!1,mrrFactors:[0,1,.5]},s=n(n({},t.materialParamsMixin),{treeRendering:i.customMeta.esriTreeRendering});if(null!=r.specifiedLodIndex){const e=Gs(i,a,s,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=Gs(i,a,s,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}const c=Gs(i,a,s);return{lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}},gltfToEngineResources:Gs,parseUrl:js});export{Oa as L,_a as P,qs as o};
