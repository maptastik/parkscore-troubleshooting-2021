import{aJ as e,cM as t,J as a,aZ as i,ai as r,hS as s,eD as n,cP as o,cR as l,aN as h}from"./vendor.1ee57f36.js";import{r as c,j as m,k as g,o as d,q as f,s as y}from"./index.4894e768.js";import{N as u,j as p}from"./cimAnalyzer.a961a551.js";import{u as M}from"./Rasterizer.cc5f3b0b.js";import"./quantizationUtils.66d2dc60.js";import"./CIMSymbolHelper.2ecfa4b9.js";class x{constructor(){}rasterizeText(e,t){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"));const a=this._textRasterizationCanvas,i=a.getContext("2d");this.setFontProperties(i,t),this.parameters=t,this.textLines=e.split(/\r?\n/),this.lineHeight=this.computeLineHeight();const r=this.computeTextWidth(i,t),s=this.lineHeight*this.textLines.length;var n;a.width=r,a.height=s,this.renderedLineHeight=Math.round(this.lineHeight*t.pixelRatio),this.renderedHaloSize=t.halo.size*t.pixelRatio,this.renderedWidth=r*t.pixelRatio,this.renderedHeight=s*t.pixelRatio,this.fillStyle=`rgba(${(n=t.color).slice(0,3).toString()},${n[3]})`,this.haloStyle=`rgb(${t.halo.color.slice(0,3).toString()})`;const o=this.renderedLineHeight,l=this.renderedHaloSize;this.setFontProperties(i,t);const h=function(e,t){return"center"===e?.5*t:"right"===e?t:0}(i.textAlign,this.renderedWidth)+l,c=l;let m=0,g=0;l>0&&this.renderHalo(i,h,c,m,g,t),g+=c,m+=h;for(const y of this.textLines)i.globalCompositeOperation="destination-out",i.fillStyle="rgb(0, 0, 0)",i.fillText(y,m,g),i.globalCompositeOperation="source-over",i.fillStyle=this.fillStyle,i.fillText(y,m,g),g+=o;const d=i.getImageData(0,0,this.renderedWidth,this.renderedHeight),f=new Uint8Array(d.data);if(t.premultiplyColors){let e;for(let t=0;t<f.length;t+=4)e=f[t+3]/255,f[t]=f[t]*e,f[t+1]=f[t+1]*e,f[t+2]=f[t+2]*e}return{size:[this.renderedWidth,this.renderedHeight],image:new Uint32Array(f.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}renderHalo(e,t,a,i,r,s){const n=this.renderedWidth,o=this.renderedHeight;this._haloRasterizationCanvas||(this._haloRasterizationCanvas=document.createElement("canvas")),this._haloRasterizationCanvas.width=n,this._haloRasterizationCanvas.height=o;const l=this._haloRasterizationCanvas,h=l.getContext("2d");h.clearRect(0,0,n,o),this.setFontProperties(h,s),h.fillStyle=this.haloStyle,h.strokeStyle=this.haloStyle;const c=this.renderedHaloSize<3;h.lineJoin=c?"miter":"round",c?this.renderHaloEmulated(h,t,a):this.renderHaloNative(h,t,a),e.globalAlpha=this.parameters.halo.color[3],e.drawImage(l,0,0,n,o,i,r,n,o),e.globalAlpha=1}renderHaloEmulated(e,t,a){const i=this.renderedLineHeight,r=this.renderedHaloSize;for(const s of this.textLines){for(const[i,n]of C)e.fillText(s,t+r*i,a+r*n);a+=i}}renderHaloNative(e,t,a){const i=this.renderedLineHeight,r=this.renderedHaloSize;for(const s of this.textLines){const n=2*r,o=5,l=.1;for(let i=0;i<o;i++){const r=1-(o-1)*l+i*l;e.lineWidth=r*n,e.strokeText(s,t,a)}a+=i}}setFontProperties(t,a){const i=a.font,r=`${i.style} ${i.weight} ${e(a.size*a.pixelRatio)}px ${i.family}, sans-serif`;let s;switch(t.font=r,t.textBaseline="top",a.horizontalAlignment){case"left":s="left";break;case"right":s="right";break;case"center":s="center";break;default:s="left"}t.textAlign=s}computeTextWidth(e,t){let a=0;for(const r of this.textLines)a=Math.max(a,e.measureText(r).width);const i=t.font;return("italic"===i.style||"oblique"===i.style||"string"==typeof i.weight&&("bold"===i.weight||"bolder"===i.weight)||"number"==typeof i.weight&&i.weight>600)&&(a+=.3*e.measureText("A").width),a+=2*this.parameters.halo.size,Math.round(a)}computeLineHeight(){const e=1.275*this.parameters.size;return Math.round(e+2*this.parameters.halo.size)}}const C=[];{const e=16;for(let t=0;t<360;t+=360/e)C.push([Math.cos(Math.PI*t/180),Math.sin(Math.PI*t/180)])}var z,I;(I=z||(z={})).Legend="legend",I.Preview="preview";const w=(t,a,i)=>{if(t&&t.targetSize){let r;if(i){const a=Math.max(i.frame.xmax-i.frame.xmin,i.frame.ymax-i.frame.ymin);r=t.targetSize/e(a)}else r=t.targetSize/a.referenceSize;return r}return t&&t.scaleFactor?t.scaleFactor:1},P={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:-2,ymin:2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:-2,ymin:2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}};function b(e,t,a,i){let r,s;return"function"==typeof e.materialHash?(r=(0,e.materialHash)(t,a,i),s=p(e.cim,e.materialOverrides)):(r=e.materialHash,s=e.cim),{analyzedCIM:s,hash:r}}const v=new class{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._rasterizer=new M,this._textRasterizer=new x,this._pictureMarkerCache=new Map}async rasterizeCIMSymbolAsync(e,a,i,r,s,n,o,l){r=r||(a?null!=a.centroid?"esriGeometryPolygon":t(a.geometry):null)||function(e){if(!(e&&e.data&&e.data.symbol))return null;switch(e.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}(e);const h=await this.analyzeCIMSymbol(e,a?(c=a.attributes,(c?Object.keys(c):[]).map((e=>({name:e,alias:e,type:"string"==typeof c[e]?"esriFieldTypeString":"esriFieldTypeDouble"})))):null,i,r,l);var c;return this.rasterizeCIMSymbol(h,a,r,s,n,o)}async analyzeCIMSymbol(e,t,r,s,n){const o=[],l=t?{geometryType:s,spatialReference:this._spatialReference,fields:t}:null;let h;await u(e.data,l,o,this._avoidSDF),a(n);for(const a of o)"CIMPictureMarker"!==a.cim.type&&"CIMPictureFill"!==a.cim.type&&"CIMPictureStroke"!==a.cim.type||(h||(h=[]),h.push(this.fetchPictureMarkerResource(a,n))),r&&"text"===a.type&&"string"==typeof a.text&&a.text.indexOf("[")>-1&&(a.text=c(r,a.text,a.cim.textCase));return h&&await i(h),o}async fetchPictureMarkerResource(e,t){const a=e.materialHash;if(!this._pictureMarkerCache.get(a)){const i=(await r(e.cim.url,{responseType:"image",signal:t&&t.signal})).data;this._pictureMarkerCache.set(a,i)}}rasterizeCIMSymbol(e,t,a,i,r,s){const n=[];for(const o of e){i&&"function"==typeof i.scaleFactor&&(i.scaleFactor=i.scaleFactor(t,r,s));const e=this._getRasterizedResource(o,t,a,i,r,s);if(!e)continue;let l=0,h=e.anchorX||0,c=e.anchorY||0,g=!1,d=0,f=0;if("esriGeometryPoint"===a){const e=w(i,o,null);if(d=m(o.offsetX,t,r,s)*e||0,f=m(o.offsetY,t,r,s)*e||0,"marker"===o.type)l=m(o.rotation,t,r,s)||0,g=!!o.rotateClockwise&&o.rotateClockwise;else if("text"===o.type){if(l=m(o.angle,t,r,s)||0,void 0!==o.horizontalAlignment)switch(o.horizontalAlignment){case"left":h=-.5;break;case"right":h=.5;break;default:h=0}if(void 0!==o.verticalAlignment)switch(o.verticalAlignment){case"top":c=.5;break;case"bottom":c=-.5;break;case"baseline":c=-.25;break;default:c=0}}}null!=e&&n.push({angle:l,rotateClockWise:g,anchorX:h,anchorY:c,offsetX:d,offsetY:f,rasterizedResource:e})}return this.getSymbolImage(n)}getSymbolImage(t){const a=document.createElement("canvas"),i=a.getContext("2d");let r=0,n=0,o=0,l=0;const h=[];for(let s=0;s<t.length;s++){const a=t[s],c=a.rasterizedResource;if(!c)continue;const m=c.size,g=a.offsetX,d=a.offsetY,f=a.anchorX,y=a.anchorY,u=a.rotateClockWise||!1;let p=a.angle,M=e(g)-m[0]*(.5+f),x=e(d)-m[1]*(.5+y),C=M+m[0],z=x+m[1];if(p){u&&(p=-p);const e=Math.sin(p*Math.PI/180),t=Math.cos(p*Math.PI/180),a=M*t-x*e,i=M*e+x*t,r=M*t-z*e,s=M*e+z*t,n=C*t-z*e,o=C*e+z*t,l=C*t-x*e,h=C*e+x*t;M=Math.min(a,r,n,l),x=Math.min(i,s,o,h),C=Math.max(a,r,n,l),z=Math.max(i,s,o,h)}r=M<r?M:r,n=x<n?x:n,o=C>o?C:o,l=z>l?z:l;const I=i.createImageData(c.size[0],c.size[1]);I.data.set(new Uint8ClampedArray(c.image.buffer));const w={offsetX:g,offsetY:d,rotateClockwise:u,angle:p,rasterizedImage:I,anchorX:f,anchorY:y};h.push(w)}a.width=o-r,a.height=l-n;const c=-r,m=l;for(let s=0;s<h.length;s++){const t=h[s],a=this._imageDataToCanvas(t.rasterizedImage),r=t.rasterizedImage.width,n=t.rasterizedImage.height,o=c-r*(.5+t.anchorX),l=m-n*(.5-t.anchorY);if(t.angle){const r=(360-t.angle)*Math.PI/180;i.save(),i.translate(e(t.offsetX),-e(t.offsetY)),i.translate(c,m),i.rotate(r),i.translate(-c,-m),i.drawImage(a,o,l),i.restore()}else i.drawImage(a,o+e(t.offsetX),l-e(t.offsetY))}const g=new s({x:c/a.width-.5,y:m/a.height-.5});return{imageData:0!==a.width&&0!==a.height?i.getImageData(0,0,a.width,a.height):i.createImageData(1,1),anchorPosition:g}}_imageDataToCanvas(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const t=this._imageDataCanvas,a=t.getContext("2d");return t.width=e.width,t.height=e.height,a.putImageData(e,0,0),t}_imageTo32Array(e,t,a){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const i=this._imageDataCanvas,r=i.getContext("2d");return i.width=t,i.height=a,r.drawImage(e,0,0,t,a),new Uint32Array(r.getImageData(0,0,t,a).data.buffer)}_getRasterizedResource(e,t,a,i,r,s){let o,l,h,c;if("esriGeometryPolyline"===a||"esriGeometryPolygon"===a){const c=i&&i.style?i.style:z.Legend,g="esriGeometryPolyline"===a?P.stroke[c]:P.fill[c];if("line"===e.type){if("CIMSolidStroke"!==e.cim.type){if("CIMPictureStroke"===e.cim.type){const a=m(e.width,t,r,s);let i,n,o;return({image:i,width:n,height:o}=this._getPictureResource(e,a)),this._rasterizePictureResource(e,i,n,o,g,a)}return null}({analyzedCIM:o,hash:h}=b(e,t,r,s)),l=this._embedCIMLayerInVectorMarker(o,g)}else if("marker"===e.type){if("CIMPictureMarker"===e.cim.type)return null;if("CIMVectorMarker"!==e.cim.type)return null;e.cim.offsetX=m(e.offsetX,t,r,s),e.cim.offsetY=m(e.offsetY,t,r,s),e.cim.rotation=m(e.rotation,t,r,s),e.cim.markerPlacement=e.markerPlacement,({analyzedCIM:o}=b(e,t,r,s)),h=n(JSON.stringify(o)).toString(),l=this._embedCIMLayerInVectorMarker(o,g)}else{if("text"===e.type)return null;if("fill"===e.type){if("CIMHatchFill"===e.cim.type||"CIMVectorMarker"===e.cim.type||"CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){const a=e.cim.size||e.cim.height;let i,n,l;if("CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type)({image:i,width:n,height:l}=this._getPictureResource(e,a));else{({analyzedCIM:o,hash:h}=b(e,t,r,s));const a=this._rasterizer.rasterizeJSONResource(o,1,this._avoidSDF);i=a.image,n=a.size[0],l=a.size[1]}return this._rasterizePictureResource(e,i,n,l,g,null)}if("CIMSolidFill"!==e.cim.type)return null;({analyzedCIM:o,hash:h}=b(e,t,r,s)),l=this._embedCIMLayerInVectorMarker(o,g)}}}else{if("text"===e.type)return c=this._rasterizeTextResource(e,t,i,r,s),c;({analyzedCIM:o,hash:h}=b(e,t,r,s));const a=w(i,e,null);if("CIMPictureMarker"===e.cim.type){const i=m(e.size,t,r,s)*a,{image:n,width:o,height:l}=this._getPictureResource(e,i);return c={image:n,size:[o,l],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},c}g(o,a,{preserveOutlineWidth:!1}),l=o}h+=a,i&&(h+=JSON.stringify(i));const d=this._resourceCache;return d.has(h)?d.get(h):(c=this._rasterizer.rasterizeJSONResource(l,window.devicePixelRatio||1,this._avoidSDF),d.set(h,c),c)}_rasterizeTextResource(e,t,a,i,r){const s=w(a,e,null),n=m(e.text,t,i,r);if(!n||0===n.length)return null;const o=m(e.fontName,t,i,r),l=m(e.style,t,i,r),h=m(e.weight,t,i,r),c=m(e.decoration,t,i,r),g=m(e.size,t,i,r)*s,f=m(e.horizontalAlignment,t,i,r),y=m(e.verticalAlignment,t,i,r),u=d(m(e.color,t,i,r)),p=d(m(e.outlineColor,t,i,r)),M={color:u,size:g,horizontalAlignment:f,verticalAlignment:y,font:{family:o,style:l,weight:h,decoration:c},halo:{size:m(e.outlineSize,t,i,r)||0,color:p,style:l},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(n,M)}_rasterizePictureResource(t,a,i,r,s,n){const h=document.createElement("canvas"),c=h.getContext("2d");h.height=e(Math.max(Math.abs(s.frame.ymax-s.frame.ymin),n)),h.width=e(Math.abs(s.frame.xmax-s.frame.xmin));const m=c.createImageData(i,r);m.data.set(new Uint8ClampedArray(a.buffer));const g=this._imageDataToCanvas(m),d=c.createPattern(g,"repeat"),f=Math.cos((-t.cim.rotation||0)*Math.PI/180),y=Math.sin((-t.cim.rotation||0)*Math.PI/180);d.setTransform({m11:f,m12:y,m21:-y,m22:f,m41:e(t.cim.offsetX)||0,m42:e(t.cim.offsetY)||0});const u=s.canvasPaths;let p,M,x;o(u)?(p=u.rings,c.fillStyle=d,M=c.fill,x=["evenodd"]):l(u)&&(p=u.paths,c.strokeStyle=d,c.lineWidth=n,M=c.stroke,p[0][0][1]=h.height/2,p[0][1][1]=h.height/2),c.beginPath();for(const o of p){const t=o?o.length:0;if(t>1){let a=o[0];c.moveTo(e(a[0]),e(a[1]));for(let i=1;i<t;++i)a=o[i],c.lineTo(e(a[0]),e(a[1]));c.closePath()}}M.apply(c,x);const C=c.getImageData(0,0,h.width,h.height),z=new Uint8Array(C.data);return{size:[h.width,h.height],image:new Uint32Array(z.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}_getPictureResource(t,a){const i=this._pictureMarkerCache.get(t.materialHash);if(!i)return null;const r=i.height/i.width,s=a?r>1?e(a):e(a)/r:i.width,n=a?r>1?e(a)*r:e(a):i.height;return{image:this._imageTo32Array(i,s,n),width:s,height:n}}_embedCIMLayerInVectorMarker(e,t){const a=o(t.geometry)?"CIMPolygonSymbol":"CIMLineSymbol";return{type:"CIMVectorMarker",frame:t.frame,markerGraphics:[{type:"CIMMarkerGraphic",geometry:t.geometry,symbol:{type:a,symbolLayers:[e]}}]}}}(null,!0);async function S(e,t={}){const{size:a,maxSize:i,feature:r,fieldMap:s,geometryType:n,style:o,node:l,opacity:c}=t,m=f(e),g=Math.min(null!=a?a:m,null!=i?i:h(120));g!==m&&(e=e.clone(),y(e,g,{preserveOutlineWidth:!0}));let d=3;e&&e.data&&e.data.symbol&&"CIMPointSymbol"!==e.data.symbol.type&&(d=1);const u=await v.rasterizeCIMSymbolAsync(e,r,s,n,{scaleFactor:d,style:o}),p=document.createElement("canvas");p.width=u.imageData.width,p.height=u.imageData.height,p.getContext("2d").putImageData(u.imageData,0,0);let M=p.width/d,x=p.height/d;if(null!=a&&(null==(null==t?void 0:t.scale)||(null==t?void 0:t.scale))){const e=M/x;M=e<=1?Math.ceil(g*e):g,x=e<=1?g:Math.ceil(g/e)}const C=new Image(M,x);return C.src=p.toDataURL(),null!=c&&(C.style.opacity=`${c}`),l&&l.appendChild(C),C}export{S as previewCIMSymbol};