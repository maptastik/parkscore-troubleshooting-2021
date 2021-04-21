import{gs as e,m as n,cW as t}from"./vendor.1ee57f36.js";function o(e){const n=[];return e.forEach((e=>n.push(e))),n}const r={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function*i(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const n of e.features)n&&(yield n)}}function*s(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const n of e.coordinates)yield*n;break;case"MultiPolygon":for(const n of e.coordinates)for(const e of n)yield*e}}function c(e){for(;;){const{value:n,done:t}=e.next();if(t)return!1;if(n.length>2)return!0}}function u(e){let n=0;for(let t=0;t<e.length;t++){const o=e[t],r=e[(t+1)%e.length];n+=o[0]*r[1]-r[0]*o[1]}return n<=0}function l(e){const n=e[0],t=e[e.length-1];return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]||e.push(n),e}function f(e,n,t){switch(n.type){case"LineString":return r=t,d(o=e,n.coordinates,r),o;case"MultiLineString":return function(e,n,t){for(const o of n.coordinates)d(e,o,t);return e}(e,n,t);case"MultiPoint":return function(e,n,t){return d(e,n.coordinates,t),e}(e,n,t);case"MultiPolygon":return function(e,n,t){for(const o of n.coordinates){a(e,o[0],t);for(let n=1;n<o.length;n++)y(e,o[n],t)}return e}(e,n,t);case"Point":return function(e,n,t){return g(e,n.coordinates,t),e}(e,n,t);case"Polygon":return function(e,n,t){const o=n.coordinates;a(e,o[0],t);for(let r=1;r<o.length;r++)y(e,o[r],t);return e}(e,n,t)}var o,r}function a(e,n,t){const o=l(n);u(o)?d(e,o,t):p(e,o,t)}function y(e,n,t){const o=l(n);u(o)?p(e,o,t):d(e,o,t)}function d(e,n,t){for(const o of n)g(e,o,t);e.lengths.push(n.length)}function p(e,n,t){for(let o=n.length-1;o>=0;o--)g(e,n[o],t);e.lengths.push(n.length)}function g(e,n,t){const[o,r,i]=n;e.coords.push(o,r),t.hasZ&&e.coords.push(i||0)}function h(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function m(e){if(!e)throw new n("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new n("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const o="string"==typeof t?t:"name"===t.type?t.properties.name:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!o||!r.test(o))throw new n("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function w(e,n={}){const t=i(e),u=[],l=new Set,f=new Set;let a,y=!1,d=Number.NEGATIVE_INFINITY,p=null,g=!1,{geometryType:m=null}=n,w=!1;for(;;){const{value:e,done:n}=t.next();if(n){const e=p&&1===p.length&&p[0]||null;if(e)for(const n of u)n.name===e&&(n.type="esriFieldTypeOID");return{fields:u,geometryType:m,hasZ:y,maxObjectId:Math.max(0,d),objectIdFieldName:e,objectIdFieldType:a,unknownFields:o(f)}}const{geometry:i,properties:b,id:P}=e;if((!i||(m||(m=r[i.type]),r[i.type]===m))&&(y||(y=c(s(i))),g||(g=null!=P,g&&(a=typeof P,"number"===a&&(p=Object.keys(b).filter((e=>b[e]===P))))),g&&"number"===a&&null!=P&&(d=Math.max(d,P),p.length>1?p=p.filter((e=>b[e]===P)):1===p.length&&(p=b[p[0]]===P?p:[])),!w&&b)){let e=!0;for(const n in b){if(l.has(n))continue;const t=b[n];if(null==t){e=!1,f.add(n);continue}const o=h(t);"unknown"!==o?(f.delete(n),l.add(n),u.push({name:n,alias:n,type:o})):f.add(n)}w=e}}}function b(n,o){return function(e){const n=[];for(;;){const{value:t,done:o}=e.next();if(o)return n;n.push(t)}}(function*(n,o={}){const{geometryType:i,objectIdFieldName:s}=o;for(;;){const{value:c,done:u}=n.next();if(u)return;const{geometry:l,properties:a,id:y}=c;if(l&&r[l.type]!==i)continue;const d=a||{};s&&null!=y&&!d[s]&&(d[s]=y);const p=new e(l?f(new t,l,o):null,d);yield p}}(i(n),o))}export{b,m as h,w};