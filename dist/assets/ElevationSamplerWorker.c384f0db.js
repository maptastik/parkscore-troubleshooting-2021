import{gW as t,f2 as e,gX as n,gY as i,k as s,r as a}from"./vendor.1ee57f36.js";import{r}from"./quickselect.53c6798b.js";class o{constructor(t=9,e){this.compareMinX=m,this.compareMinY=d,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this.toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),X.prune(),Y.prune(),B.prune(),_.prune()}all(t){this._all(this.data,t)}search(t,e){let n=this.data;const i=this.toBBox;if(M(t,n))for(X.clear();n;){for(let s=0,a=n.children.length;s<a;s++){const a=n.children[s],r=n.leaf?i(a):a;M(t,r)&&(n.leaf?e(a):p(t,r)?this._all(a,e):X.push(a))}n=X.pop()}}collides(t){let e=this.data;const n=this.toBBox;if(!M(t,e))return!1;for(X.clear();e;){for(let i=0,s=e.children.length;i<s;i++){const s=e.children[i],a=e.leaf?n(s):s;if(M(t,a)){if(e.leaf||p(t,a))return!0;X.push(s)}}e=X.pop()}return!1}load(t,e=t.length){if(!e)return this;if(e<this._minEntries){for(let n=0,i=e;n<i;n++)this.insert(t[n]);return this}let n=this._build(t.slice(0,e),0,e-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const t=this.data;this.data=n,n=t}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new b([]),this}remove(t){if(!t)return this;let i,s=this.data,a=null,r=0,o=!1;const h=this.toBBox(t);for(B.clear(),_.clear();s||B.length>0;){var l;if(s||(s=e(B.pop()),a=B.data[B.length-1],r=null!=(l=_.pop())?l:0,o=!0),s.leaf&&(i=n(s.children,t,s.children.length,s.indexHint),-1!==i))return s.children.splice(i,1),B.push(s),this._condense(B),this;o||s.leaf||!p(s,h)?a?(r++,s=a.children[r],o=!1):s=null:(B.push(s),_.push(r),r=0,a=s,s=s.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let n=t;for(Y.clear();n;){var i;if(!0===n.leaf)for(const t of n.children)e(t);else Y.pushArray(n.children);n=null!=(i=Y.pop())?i:null}}_build(t,e,n,i){const s=n-e+1;let a=this._maxEntries;if(s<=a){const i=new b(t.slice(e,n+1));return h(i,this.toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(a)),a=Math.ceil(s/Math.pow(a,i-1)));const r=new v([]);r.height=i;const o=Math.ceil(s/a),l=o*Math.ceil(Math.sqrt(a));g(t,e,n,l,this.compareMinX);for(let h=e;h<=n;h+=l){const e=Math.min(h+l-1,n);g(t,h,e,o,this.compareMinY);for(let n=h;n<=e;n+=o){const s=Math.min(n+o-1,e);r.children.push(this._build(t,n,s,i-1))}}return h(r,this.toBBox),r}_chooseSubtree(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,r=1/0;for(let o=0,h=e.children.length;o<h;o++){const h=e.children[o],l=u(h),c=(s=t,a=h,(Math.max(a.maxX,s.maxX)-Math.min(a.minX,s.minX))*(Math.max(a.maxY,s.maxY)-Math.min(a.minY,s.minY))-l);c<r?(r=c,i=l<i?l:i,n=h):c===r&&l<i&&(i=l,n=h)}e=n||e.children[0]}var s,a;return e}_insert(t,e,n){const i=this.toBBox,s=n?t:i(t);B.clear();const a=this._chooseSubtree(s,this.data,e,B);for(a.children.push(t),c(a,s);e>=0&&B.data[e].children.length>this._maxEntries;)this._split(B,e),e--;this._adjustParentBBoxes(s,B,e)}_split(t,e){const n=t.data[e],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const a=this._chooseSplitIndex(n,s,i);if(!a)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=n.children.splice(a,n.children.length-a),o=n.leaf?new b(r):new v(r);o.height=n.height,h(n,this.toBBox),h(o,this.toBBox),e?t.data[e-1].children.push(o):this._splitRoot(n,o)}_splitRoot(t,e){this.data=new v([t,e]),this.data.height=t.height+1,h(this.data,this.toBBox)}_chooseSplitIndex(t,e,n){let i,s,a;i=s=1/0;for(let r=e;r<=n-e;r++){const e=l(t,0,r,this.toBBox),o=l(t,r,n,this.toBBox),h=f(e,o),c=u(e)+u(o);h<i?(i=h,a=r,s=c<s?c:s):h===i&&c<s&&(s=c,a=r)}return a}_chooseSplitAxis(t,e,n){const i=t.leaf?this.compareMinX:m,s=t.leaf?this.compareMinY:d;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,s)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const s=this.toBBox,a=l(t,0,e,s),r=l(t,n-e,n,s);let o=x(a)+x(r);for(let h=e;h<n-e;h++){const e=t.children[h];c(a,t.leaf?s(e):e),o+=x(a)}for(let h=n-e-1;h>=e;h--){const e=t.children[h];c(r,t.leaf?s(e):e),o+=x(r)}return o}_adjustParentBBoxes(t,e,n){for(let i=n;i>=0;i--)c(e.data[i],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const i=t.data[e];if(0===i.children.length)if(e>0){const s=t.data[e-1],a=s.children;a.splice(n(a,i,a.length,s.indexHint),1)}else this.clear();else h(i,this.toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function h(t,e){l(t,0,t.children.length,e,t)}function l(t,e,n,i,s){s||(s=new b([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let a,r=e;r<n;r++)a=t.children[r],c(s,t.leaf?i(a):a);return s}function c(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function m(t,e){return t.minX-e.minX}function d(t,e){return t.minY-e.minY}function u(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function x(t){return t.maxX-t.minX+(t.maxY-t.minY)}function f(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),s=Math.min(t.maxX,e.maxX),a=Math.min(t.maxY,e.maxY);return Math.max(0,s-n)*Math.max(0,a-i)}function p(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function M(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function g(t,n,i,s,a){const o=[n,i];for(;o.length;){const n=e(o.pop()),i=e(o.pop());if(n-i<=s)continue;const h=i+Math.ceil((n-i)/s/2)*s;r(t,h,i,n,a),o.push(i,h,h,n)}}const X=new t,Y=new t,B=new t,_=new t({deallocator:void 0});class w extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new i}}class b extends w{constructor(t){super(),this.children=t,this.leaf=!0}}class v extends w{constructor(t){super(),this.children=t,this.leaf=!1}}class A{async createIndex(t,e){const n=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new o;const i=this.createMeshData(t),a=s(e)?await e.invoke("createIndexThread",i,{transferList:n}):this.createIndexThread(i).result;return this.createPooledRBush().fromJSON(a)}createIndexThread(t){const e=new Float64Array(t.position),n=this.createPooledRBush();return t.components?this.createIndexComponentsThread(n,e,t.components.map((t=>new Uint32Array(t)))):this.createIndexAllThread(n,e)}createIndexAllThread(t,e){const n=new Array(e.length/9);let i=0;for(let s=0;s<e.length;s+=9)n[i++]=S(e,s+0,s+3,s+6);return t.load(n),{result:t.toJSON()}}createIndexComponentsThread(t,e,n){let i=0;for(const r of n)i+=r.length/3;const s=new Array(i);let a=0;for(const r of n)for(let t=0;t<r.length;t+=3)s[a++]=S(e,3*r[t+0],3*r[t+1],3*r[t+2]);return t.load(s),{result:t.toJSON()}}createMeshData(t){const e=t.vertexAttributes.position.buffer;return!t.components||t.components.some((t=>!t.faces))?{position:e}:{position:e,components:t.components.map((t=>t.faces))}}createPooledRBush(){return new o(9,a("csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function S(t,e,n,i){return{minX:Math.min(t[e+0],t[n+0],t[i+0]),maxX:Math.max(t[e+0],t[n+0],t[i+0]),minY:Math.min(t[e+1],t[n+1],t[i+1]),maxY:Math.max(t[e+1],t[n+1],t[i+1]),p0:[t[e+0],t[e+1],t[e+2]],p1:[t[n+0],t[n+1],t[n+2]],p2:[t[i+0],t[i+1],t[i+2]]}}export default A;export{A as ElevationSamplerWorker};