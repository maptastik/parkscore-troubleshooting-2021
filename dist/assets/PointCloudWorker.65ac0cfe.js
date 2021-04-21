var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,i=(e,i)=>{for(var a in i||(i={}))t.call(i,a)&&o(e,a,i[a]);if(r)for(var a of r(i))n.call(i,a)&&o(e,a,i[a]);return e};import{m as a,g as l,s,k as c,q as u,hn as f,U as d,X as b,ho as y,hp as p}from"./vendor.1ee57f36.js";import{t as g,w,n as h}from"./vec3f32.ab50b617.js";import{a as m,c as v,b as U}from"./PointCloudUniqueValueRenderer.de2fc7ac.js";function C(){const e=new Float32Array(4);return e[3]=1,e}Object.freeze({__proto__:null,create:C,clone:function(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},fromValues:function(e,t,r,n){const o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=r,o[3]=n,o},createView:function(e,t){return new Float32Array(e,t,4)}});function A(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+0,10)),version:t.getUint16(r+10,!0),checksum:t.getUint32(r+12,!0)}}function I(e,t,r){const n=[];t=M(e,t,n);const o=[];for(let i=0;i<n.length;i++){o.length=0,t=M(e,t,o);for(let e=0;e<o.length;e++)r.push(o[e]+n[i])}return t}function M(e,t,r){const n=new DataView(e,t),o=n.getUint8(0),i=31&o,l=!!(32&o),s=(192&o)>>6;let c=0;if(0===s)c=n.getUint32(1,!0),t+=5;else if(1===s)c=n.getUint16(1,!0),t+=3;else{if(2!==s)throw new a("lepcc-decode-error","Bad count type");c=n.getUint8(1),t+=2}if(l)throw new a("lepcc-decode-error","LUT not implemented");const u=Math.ceil(c*i/8),f=new Uint8Array(e,t,u);let d=0,b=0,y=0;const p=-1>>>32-i;for(let a=0;a<c;a++){for(;b<i;)d|=f[y]<<b,b+=8,y+=1;r[a]=d&p,d>>>=i,b-=i,b+i>32&&(d|=f[y-1]>>8-b)}return t+y}const O=l.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function F(e,t,r){let n="",o=0;for(;o<r;){const i=e[t+o];if(i<128)n+=String.fromCharCode(i),o++;else if(i>=192&&i<224){if(o+1>=r)throw new a("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const l=(31&i)<<6|63&e[t+o+1];n+=String.fromCharCode(l),o+=2}else if(i>=224&&i<240){if(o+2>=r)throw new a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const l=(15&i)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];n+=String.fromCharCode(l),o+=3}else{if(!(i>=240&&i<248))throw new a("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(o+3>=r)throw new a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const l=(7&i)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(l>=65536){const e=55296+(l-65536>>10),t=56320+(1023&l);n+=String.fromCharCode(e,t)}else n+=String.fromCharCode(l);o+=4}}}return n}function B(e,t){const r={byteOffset:0,byteCount:0,fields:Object.create(null)};let n=0;for(let o=0;o<t.length;o++){const i=t[o],a=i.valueType||i.type,l=L[a];r.fields[i.property]=l(e,n),n+=D[a].BYTES_PER_ELEMENT}return r.byteCount=n,r}function S(e,t){return new D[t.valueType](e,t.byteOffset,t.count*t.valuesPerElement)}function T(e,t,r){if(t!==e&&O.error(`Invalid ${r} buffer size\n expected: ${e}, actual: ${t})`),t<e)throw new a("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}const z={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function x(e,t,r){if("lepcc-rgb"===e.encoding)return function(e){const t=new DataView(e,0);let r=0;const{identifier:n,version:o}=A(e,t,r);if(r+=16,"ClusterRGB"!==n)throw new a("lepcc-decode-error","Bad identifier");if(o>1)throw new a("lepcc-decode-error","Unknown version");const i=(s=r,{sizeLo:(l=t).getUint32(s+0,!0),sizeHi:l.getUint32(s+4,!0),count:l.getUint32(s+8,!0),colorMapCount:l.getUint16(s+12,!0),lookupMethod:l.getUint8(s+14),compressionMethod:l.getUint8(s+15)});var l,s;if(r+=16,i.sizeHi*Math.pow(2,32)+i.sizeLo!==e.byteLength)throw new a("lepcc-decode-error","Bad size");if((2===i.lookupMethod||1===i.lookupMethod)&&0===i.compressionMethod){if(3*i.colorMapCount+i.count+r!==e.byteLength||i.colorMapCount>256)throw new a("lepcc-decode-error","Bad count");const t=new Uint8Array(e,r,3*i.colorMapCount),n=new Uint8Array(e,r+3*i.colorMapCount,i.count),o=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++){const r=n[e];o[3*e]=t[3*r],o[3*e+1]=t[3*r+1],o[3*e+2]=t[3*r+2]}return o}if(0===i.lookupMethod&&0===i.compressionMethod){if(3*i.count+r!==e.byteLength||0!==i.colorMapCount)throw new a("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(i.lookupMethod<=2&&1===i.compressionMethod){if(r+3!==e.byteLength||1!==i.colorMapCount)throw new a("lepcc-decode-error","Bad count");const n=t.getUint8(r),o=t.getUint8(r+1),l=t.getUint8(r+2),s=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++)s[3*e]=n,s[3*e+1]=o,s[3*e+2]=l;return s}throw new a("lepcc-decode-error","Bad method "+i.lookupMethod+","+i.compressionMethod)}(t);if("lepcc-intensity"===e.encoding)return function(e){const t=new DataView(e,0);let r=0;const{identifier:n,version:o}=A(e,t,r);if(r+=16,"Intensity "!==n)throw new a("lepcc-decode-error","Bad identifier");if(o>1)throw new a("lepcc-decode-error","Unknown version");const i=(s=r,{sizeLo:(l=t).getUint32(s+0,!0),sizeHi:l.getUint32(s+4,!0),count:l.getUint32(s+8,!0),scaleFactor:l.getUint16(s+12,!0),bitsPerPoint:l.getUint8(s+14),reserved:l.getUint8(s+15)});var l,s;if(r+=16,i.sizeHi*Math.pow(2,32)+i.sizeLo!==e.byteLength)throw new a("lepcc-decode-error","Bad size");const c=new Uint16Array(i.count);if(8===i.bitsPerPoint){if(i.count+r!==e.byteLength)throw new a("lepcc-decode-error","Bad size");const t=new Uint8Array(e,r,i.count);for(let e=0;e<i.count;e++)c[e]=t[e]*i.scaleFactor}else if(16===i.bitsPerPoint){if(2*i.count+r!==e.byteLength)throw new a("lepcc-decode-error","Bad size");const t=new Uint16Array(e,r,i.count);for(let e=0;e<i.count;e++)c[e]=t[e]*i.scaleFactor}else{const t=[];if(M(e,r,t)!==e.byteLength)throw new a("lepcc-decode-error","Bad size");for(let e=0;e<i.count;e++)c[e]=t[e]*i.scaleFactor}return c}(t);if(null!=e.encoding&&""!==e.encoding)throw new a("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(O.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(O.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const n=function(e,t,r){const n=null!=t.header?B(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:n,byteOffset:n.byteCount,byteCount:0,entries:Object.create(null)};let i=n.byteCount;for(let l=0;l<t.ordering.length;l++){const e=t.ordering[l],r=s(t[e]);if(r.count=n.fields.count,"String"===r.valueType){if(r.byteOffset=i,r.byteCount=n.fields[e+"ByteCount"],"UTF-8"!==r.encoding)throw new a("unsupported-encoding","Unsupported String encoding.",{encoding:r.encoding})}else{if(!V(r.valueType))throw new a("unsupported-value-type","Unsupported binary valueType",{valueType:r.valueType});{const e=k(r.valueType);i+=i%e!=0?e-i%e:0,r.byteOffset=i,r.byteCount=e*r.valuesPerElement*r.count}}i+=r.byteCount,o.entries[e]=r}return o.byteCount=i-o.byteOffset,o}(t,e,r);T(n.byteOffset+n.byteCount,t.byteLength,"attribute");const o=n.entries.attributeValues||n.entries.objectIds;if(o){if("String"===o.valueType){const e=n.entries.attributeByteCounts,r=S(t,e),i=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,o);return function(e,t,r){const n=[];let o,i,l=0;for(i=0;i<e;i+=1){if(o=t[i],o>0){if(n.push(F(r,l,o-1)),0!==r[l+o-1])throw new a("string-array-error","Invalid string array: missing null termination.")}else n.push(null);l+=o}return n}(e.count,r,i)}return S(t,o)}throw new a("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const D={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},L={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function V(e){return D.hasOwnProperty(e)}function k(e){return V(e)?D[e].BYTES_PER_ELEMENT:0}function E(e,t){if(null==e.encoding||""===e.encoding){const r=function(e,t){const r=B(e,t&&t.header);let n=r.byteCount;const o={isDraco:!1,header:r,byteOffset:r.byteCount,byteCount:0,vertexAttributes:{}},a=r.fields,l=null!=a.vertexCount?a.vertexCount:a.count;for(const u of t.ordering){if(!t.vertexAttributes[u])continue;const e=i(i({},t.vertexAttributes[u]),{byteOffset:n,count:l}),r=z[u]?z[u]:"_"+u;o.vertexAttributes[r]=e,n+=k(e.valueType)*e.valuesPerElement*l}const s=a.faceCount;if(t.faces&&s){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const r=i(i({},t.faces[e]),{byteOffset:n,count:s});o.faces[e]=r,n+=k(r.valueType)*r.valuesPerElement*s}}const c=a.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const r=i(i({},t.featureAttributes[e]),{byteOffset:n,count:c});o.featureAttributes[e]=r,n+=("UInt64"===r.valueType?8:k(r.valueType))*r.valuesPerElement*c}}return T(n,e.byteLength,"geometry"),o.byteCount=n-o.byteOffset,o}(t,e);if(u(r.vertexAttributes.position))return;const n=S(t,r.vertexAttributes.position),o=r.header.fields,a=[o.offsetX,o.offsetY,o.offsetZ],l=[o.scaleX,o.scaleY,o.scaleZ],s=n.length/3,c=new Float64Array(3*s);for(let e=0;e<s;e++)c[3*e]=n[3*e]*l[0]+a[0],c[3*e+1]=n[3*e+1]*l[1]+a[1],c[3*e+2]=n[3*e+2]*l[2]+a[2];return c}if("lepcc-xyz"===e.encoding)return function(e){const t=new DataView(e,0);let r=0;const{identifier:n,version:o}=A(e,t,r);if(r+=16,"LEPCC     "!==n)throw new a("lepcc-decode-error","Bad identifier");if(o>1)throw new a("lepcc-decode-error","Unknown version");const i=(s=r,{sizeLo:(l=t).getUint32(s+0,!0),sizeHi:l.getUint32(s+4,!0),minX:l.getFloat64(s+8,!0),minY:l.getFloat64(s+16,!0),minZ:l.getFloat64(s+24,!0),maxX:l.getFloat64(s+32,!0),maxY:l.getFloat64(s+40,!0),maxZ:l.getFloat64(s+48,!0),errorX:l.getFloat64(s+56,!0),errorY:l.getFloat64(s+64,!0),errorZ:l.getFloat64(s+72,!0),count:l.getUint32(s+80,!0),reserved:l.getUint32(s+84,!0)});var l,s;if(r+=88,i.sizeHi*Math.pow(2,32)+i.sizeLo!==e.byteLength)throw new a("lepcc-decode-error","Bad size");const c=new Float64Array(3*i.count),u=[],f=[],d=[],b=[];if(r=I(e,r,u),r=I(e,r,f),r=I(e,r,d),r=I(e,r,b),r!==e.byteLength)throw new a("lepcc-decode-error","Bad length");let y=0,p=0;for(let a=0;a<u.length;a++){p+=u[a];let e=0;for(let t=0;t<f[a];t++){e+=d[y];const t=b[y];c[3*y]=Math.min(i.maxX,i.minX+2*i.errorX*e),c[3*y+1]=Math.min(i.maxY,i.minY+2*i.errorY*p),c[3*y+2]=Math.min(i.maxZ,i.minZ+2*i.errorZ*t),y++}}return{errorX:i.errorX,errorY:i.errorY,errorZ:i.errorZ,result:c}}(t).result}function P(e,t,r){return c(e)&&e.attributeInfo.useElevation?function(e,t){const r=new Float64Array(t);for(let n=0;n<t;n++)r[n]=e[3*n+2];return r}(t,r):c(e)?x(e.attributeInfo.storageInfo,e.buffer,r):null}function j(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function R(e){let t=0;for(const r of e||[])t|=1<<r;return t}class _{transform(e){const t=this._transform(e),r=[t.points.buffer,t.rgb.buffer];c(t.pointIdFilterMap)&&r.push(t.pointIdFilterMap.buffer);for(const n of t.attributes)"buffer"in n.values&&f(n.values.buffer)&&n.values.buffer!==t.rgb.buffer&&r.push(n.values.buffer);return d({result:t,transferList:r})}_transform(e){const t=E(e.schema,e.geometryBuffer);let r=t.length/3,n=null;const o=[],i=P(e.primaryAttributeData,t,r);c(e.primaryAttributeData)&&i&&o.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:i});const a=P(e.modulationAttributeData,t,r);c(e.modulationAttributeData)&&a&&o.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:a});let l=function(e,t,r,n){const{rendererJSON:o,isRGBRenderer:i}=e;let a=null,l=null;if(t&&i)a=t;else if(t&&"pointCloudUniqueValueRenderer"===o.type){l=m.fromJSON(o);const e=l.colorUniqueValueInfos;a=new Uint8Array(3*n);const r=j(l.fieldTransformType);for(let o=0;o<n;o++){const n=(r?r(t[o]):t[o])+"";for(let t=0;t<e.length;t++)if(e[t].values.indexOf(n)>=0){a[3*o]=e[t].color.r,a[3*o+1]=e[t].color.g,a[3*o+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===o.type){l=v.fromJSON(o);const e=l.stops;a=new Uint8Array(3*n);const r=j(l.fieldTransformType);for(let o=0;o<n;o++){const n=r?r(t[o]):t[o],i=e.length-1;if(n<e[0].value)a[3*o]=e[0].color.r,a[3*o+1]=e[0].color.g,a[3*o+2]=e[0].color.b;else if(n>=e[i].value)a[3*o]=e[i].color.r,a[3*o+1]=e[i].color.g,a[3*o+2]=e[i].color.b;else for(let t=1;t<e.length;t++)if(n<e[t].value){const r=(n-e[t-1].value)/(e[t].value-e[t-1].value);a[3*o]=e[t].color.r*r+e[t-1].color.r*(1-r),a[3*o+1]=e[t].color.g*r+e[t-1].color.g*(1-r),a[3*o+2]=e[t].color.b*r+e[t-1].color.b*(1-r);break}}}else if(t&&"pointCloudClassBreaksRenderer"===o.type){l=U.fromJSON(o);const e=l.colorClassBreakInfos;a=new Uint8Array(3*n);const r=j(l.fieldTransformType);for(let o=0;o<n;o++){const n=r?r(t[o]):t[o];for(let t=0;t<e.length;t++)if(n>=e[t].minValue&&n<=e[t].maxValue){a[3*o]=e[t].color.r,a[3*o+1]=e[t].color.g,a[3*o+2]=e[t].color.b;break}}}else{a=new Uint8Array(3*n);for(let e=0;e<a.length;e++)a[e]=255}if(r&&l&&l.colorModulation){const e=l.colorModulation.minValue,t=l.colorModulation.maxValue,o=.3;for(let i=0;i<n;i++){const n=r[i],l=n>=t?1:n<=e?o:o+(1-o)*(n-e)/(t-e);a[3*i]=l*a[3*i],a[3*i+1]=l*a[3*i+1],a[3*i+2]=l*a[3*i+2]}}return a}(e.rendererInfo,i,a,r);if(e.filterInfo&&e.filterInfo.length>0&&c(e.filterAttributesData)){const i=e.filterAttributesData.map((e=>{const n=P(e,t,r),i={attributeInfo:e.attributeInfo,values:n};return o.push(i),i}));n=new Uint32Array(r),r=function(e,t,r,n,o){const i=e.length/3;let a=0;for(let l=0;l<i;l++){let i=!0;for(let e=0;e<n.length&&i;e++){const{filterJSON:t}=n[e],r=o[e].values[l];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;-1!==t.values.indexOf(r)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=R(t.requiredSetBits),n=R(t.requiredClearBits);(r&e)===e&&0==(r&n)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&r,n=r>>>4&15,o=n>1,a=1===e,l=e===n;let s=!1;for(const r of t.includedReturns)if("last"===r&&l||"firstOfMany"===r&&a&&o||"lastOfMany"===r&&l&&o||"single"===r&&!o){s=!0;break}s||(i=!1);break}}}i&&(r[a]=l,e[3*a]=e[3*l],e[3*a+1]=e[3*l+1],e[3*a+2]=e[3*l+2],t[3*a]=t[3*l],t[3*a+1]=t[3*l+1],t[3*a+2]=t[3*l+2],a++)}return a}(t,l,n,e.filterInfo,i)}for(const c of e.userAttributesData){const e=P(c,t,r);o.push({attributeInfo:c.attributeInfo,values:e})}3*r<l.length&&(l=new Uint8Array(l.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(t,r,e.elevationOffset);const s=this._transformCoordinates(t,r,e.obb,b.fromJSON(e.inSR),b.fromJSON(e.outSR));return{obb:e.obb,points:s,rgb:l,attributes:o,pointIdFilterMap:n}}_transformCoordinates(e,t,r,n,o){if(!y(e,n,0,e,o,0,t))throw Error("Can't reproject");const i=g(r.center[0],r.center[1],r.center[2]),a=h(),l=h();w(Y,r.quaternion);const s=new Float32Array(3*t);for(let c=0;c<t;c++)a[0]=e[3*c]-i[0],a[1]=e[3*c+1]-i[1],a[2]=e[3*c+2]-i[2],p(l,a,Y),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(l[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(l[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(l[2])),s[3*c]=a[0],s[3*c+1]=a[1],s[3*c+2]=a[2];return s}_applyElevationOffsetInPlace(e,t,r){if(0!==r)for(let n=0;n<t;n++)e[3*n+2]+=r}}const Y=C();function X(){return new _}export default X;