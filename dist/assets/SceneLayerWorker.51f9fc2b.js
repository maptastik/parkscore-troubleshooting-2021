import{c0 as e,O as t,aI as n,hG as r,k as o,U as s}from"./vendor.1ee57f36.js";function i(e){return n(`esri/libs/i3s/${e}`)}let a,f,c;async function u(e){await L();const t=[e.geometryBuffer];return{result:E(e,t),transferList:t}}async function l(e){var t;await L();const n=[e.geometryBuffer],{geometryBuffer:o}=e,s=o.byteLength,i=c._malloc(s),a=new Uint8Array(c.HEAPU8.buffer,i,s);a.set(new Uint8Array(o));const f=c.dracoDecompressPointCloudData(i,a.byteLength);if(c._free(i),f.error.length>0)throw`i3s.wasm: ${f.error}`;const u=(null==(t=f.featureIds)?void 0:t.length)>0?r(f.featureIds):null,l=r(f.positions);return u&&n.push(u.buffer),n.push(l.buffer),{result:{positions:l,featureIds:u},transferList:n}}async function y(e){await L(),g(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function b(e){await L(),h(e)}async function d(e){await L(),c.setLegacySchema(e.context,e.jsonSchema)}function m(e){w(e)}function h(e){const t=e.modifications,n=c._malloc(8*t.length),r=new Float64Array(c.HEAPU8.buffer,n,t.length);for(let o=0;o<t.length;++o)r[o]=t[o];c.setModifications(e.context,n,t.length,e.isGeodetic),c._free(n)}function E(e,t){if(!c)return null;const{context:n,localOrigin:s,globalTrafo:i,mbs:a,obb:f,elevationOffset:u,geometryBuffer:l,geometryDescriptor:y,indexToVertexProjector:b,vertexToRenderProjector:d}=e,m=c._malloc(l.byteLength),h=c._malloc(33*Float64Array.BYTES_PER_ELEMENT),E=new Uint8Array(c.HEAPU8.buffer,m,l.byteLength);E.set(new Uint8Array(l));const p=new Float64Array(c.HEAPU8.buffer,h,33);A(p,s);let g=p.byteOffset+3*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g);A(w,i),g+=16*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g),A(w,a),g+=4*p.BYTES_PER_ELEMENT,o(f)&&(w=new Float64Array(p.buffer,g),A(w,f.center),g+=3*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g),A(w,f.halfSize),g+=3*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g),A(w,f.quaternion));const L=y,_={isDraco:!1,isLegacy:!1,color:e.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:e.needNormals&&e.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:e.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:e.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:L.featureIndex},T=c.process(n,!!e.obb,m,E.byteLength,L,_,h,u,b,d,e.normalReferenceFrame);if(c._free(h),c._free(m),T.error.length>0)throw`i3s.wasm: ${T.error}`;if(T.discarded)return null;const I=T.componentOffsets.length>0?r(T.componentOffsets):null,P=T.featureIds.length>0?r(T.featureIds):null,F=r(T.interleavedVertedData).buffer,M=1===T.indicesType?r(new Uint16Array(T.indices.buffer,T.indices.byteOffset,T.indices.byteLength/2)):r(new Uint32Array(T.indices.buffer,T.indices.byteOffset,T.indices.byteLength/4)),O=r(T.positions),B=1===T.positionIndicesType?r(new Uint16Array(T.positionIndices.buffer,T.positionIndices.byteOffset,T.positionIndices.byteLength/2)):r(new Uint32Array(T.positionIndices.buffer,T.positionIndices.byteOffset,T.positionIndices.byteLength/4)),R={layout:e.layouts[0],interleavedVertexData:F,indices:M,hasColors:T.hasColors,hasModifications:T.hasModifications,positionData:{data:O,indices:B}};return P&&t.push(P.buffer),I&&t.push(I.buffer),t.push(F),t.push(M.buffer),t.push(O.buffer),t.push(B.buffer),{componentOffsets:I,featureIds:P,transformedGeometry:R,obb:T.obb}}function p(e){return 0===e?0:1===e?1:2===e?2:3}function g(e){const{context:t,buffer:n}=e,r=c._malloc(n.byteLength),o=n.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(c.HEAPU8.buffer,r,o),i=new Float64Array(n);s.set(i),c.filterOBBs(t,r,o),i.set(s),c._free(r)}function w(e){c&&c.destroy(e)}function A(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}function L(){return c?s():(f||(f=(a||(a=e((e=>import("./i3s.a10b0817.js").then((function(e){return e.i})).then((({default:t})=>{const n=t({locateFile:i,onRuntimeInitialized:()=>e(n)});delete n.then})))).catch((e=>t(e)))),a).then((e=>{c=e,f=null}))),f)}const _={transform:E,destroy:w};export{m as destroyContext,l as dracoDecompressPointCloudData,y as filterObbsForModifications,g as filterObbsForModificationsSync,L as initialize,p as interpretObbModificationResults,u as process,d as setLegacySchema,b as setModifications,h as setModificationsSync,_ as test};