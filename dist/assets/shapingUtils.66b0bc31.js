var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,n=(t,i,s)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,r=(e,r)=>{for(var a in r||(r={}))t.call(r,a)&&n(e,a,r[a]);if(i)for(var a of i(r))s.call(r,a)&&n(e,a,r[a]);return e};import{r as a}from"./BidiEngine.39026c84.js";import{dw as l,c9 as o,dx as u,e as c,y as d,o as h,i as f,aV as p,dy as m,s as g,g as y,r as x,q as b,dz as v,m as w,dA as _,H as T,k as E,dB as S,dC as z,aJ as F,dD as M,b4 as V,b0 as C,c6 as R,bP as I,b3 as L,b1 as O,b2 as B,dE as N}from"./vendor.1ee57f36.js";import{s as k}from"./MD5.89293f8b.js";import{A as P,E as $,_ as D,m as j}from"./Utils.88967ee0.js";import{S as A,l as J}from"./MaterialKey.464cac5a.js";import{o as W}from"./visualVariablesUtils.dc4022b6.js";import{i as K}from"./Rect.8611b8cd.js";const G=new a;function H(e){if(!G.hasBidiChar(e))return[e,!1];let t;return t="rtl"===G.checkContextual(e)?"IDNNN":"ICNNN",[G.bidiTransform(e,t,"VLYSN"),!0]}class U{constructor(e,t,i,s){this.center=l(e,t),this.centerT=o(),this.halfWidth=i/2,this.halfHeight=s/2,this.width=i,this.height=s}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(e){this.center[0]=e}set y(e){this.center[1]=e}clone(){return new U(this.x,this.y,this.width,this.height)}serialize(e){return e.writeF32(this.center[0]),e.writeF32(this.center[1]),e.push(this.width),e.push(this.height),e}findCollisionDelta(e,t=4){const i=Math.abs(e.centerT[0]-this.centerT[0]),s=Math.abs(e.centerT[1]-this.centerT[1]),n=(e.halfWidth+this.halfWidth+t)/i,r=(e.halfHeight+this.halfHeight+t)/s,a=Math.min(n,r);return u(a)}extend(e){const t=Math.min(this.xmin,e.xmin),i=Math.min(this.ymin,e.ymin),s=Math.max(this.xmax,e.xmax)-t,n=Math.max(this.ymax,e.ymax)-i,r=t+s/2,a=i+n/2;this.width=s,this.height=n,this.halfWidth=s/2,this.halfHeight=n/2,this.x=r,this.y=a}static deserialize(e){const t=e.readF32(),i=e.readF32(),s=e.readInt32(),n=e.readInt32();return new U(t,i,s,n)}}var q;let Y=q=class extends p{writeLevels(e,t,i){for(const s in e){const e=this.levels[s];return void(t.stops=e)}}clone(){return new q({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:m(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:m(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:g(this.levels)})}};c([d()],Y.prototype,"levels",void 0),c([h("levels")],Y.prototype,"writeLevels",null),Y=q=c([f("esri.views.2d.engine.LevelDependentSizeVariable")],Y);const X=y.getLogger("esri.views.2d.layers.support.clusterUtils");x.add("esri-cluster-arcade-enabled",1);const Z=x("esri-cluster-arcade-enabled"),Q=(e,t,i,s)=>{const n=t.clone();if(!se(n))return n;if(i.fields)for(const r of i.fields)ne(e,r);if("visualVariables"in n){const t=(n.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),r=ee(t);t.forEach((t=>{"rotation"===t.type?t.field?t.field=ae(e,t.field,"avg_angle"):t.valueExpression&&(t.field=re(e,t.valueExpression,"avg_angle"),t.valueExpression=null):t.normalizationField?(t.field=ae(e,t.field,"norm",t.normalizationField),t.normalizationField=null):t.field?t.field=ae(e,t.field,"avg"):(t.field=re(e,t.valueExpression,"avg"),t.valueExpression=null)})),b(r)&&!te(t)&&(t.push(ie(i,s)),n.dynamicClusterSize=!0),n.visualVariables=t}switch(n.type){case"simple":break;case"unique-value":n.field?n.field=ae(e,n.field,"mode"):n.valueExpression&&(n.field=re(e,n.valueExpression,"mode"),n.valueExpression=null);break;case"class-breaks":n.normalizationField?(n.field=ae(e,n.field,"norm",n.normalizationField),n.normalizationField=null):n.field?n.field=ae(e,n.field,"avg"):(n.field=re(e,n.valueExpression,"avg"),n.valueExpression=null)}return n},ee=e=>{for(const t of e)if("size"===t.type)return t;return null},te=e=>{for(const t of e)if("cluster_count"===t.field)return!0;return!1},ie=(e,t)=>{const i=[new v({value:0,size:0}),new v({value:1})];if(b(t))return new p({field:"cluster_count",stops:[...i,new v({value:2,size:0})]});const s=Object.keys(t).reduce(((s,n)=>r(r({},s),{[n]:[...i,new v({value:Math.max(2,t[n].minValue),size:e.clusterMinSize}),new v({value:Math.max(3,t[n].maxValue),size:e.clusterMaxSize})]})),{});return new Y({field:"cluster_count",levels:s})},se=e=>{const t=t=>X.error(new w("Unsupported-renderer",t,{renderer:e}));if("unique-value"===e.type){if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===e.type){if(e.normalizationField){const i=e.normalizationType;if("field"!==i)return t(`FeatureReductionCluster does not support a normalizationType of ${i}`),!1}}else if("simple"!==e.type)return t(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1;if(!Z){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function ne(e,t){const{name:i,outStatistic:s}=t,{onStatisticField:n,onStatisticValueExpression:r,statisticType:a}=s;if(r){const t=k(r.toLowerCase());e.push({name:i,outStatistic:{onStatisticField:t,onStatisticValueExpression:r,statisticType:a}})}else n?e.push({name:i,outStatistic:{onStatisticField:n,statisticType:a}}):X.error(new w("mapview-unsupported-field","Unable to handle field",{field:t}))}function re(e,t,i){const s=k(t),n="mode"===i?`cluster_type_${s}`:`cluster_avg_${s}`;return e.some((e=>e.name===n))||e.push({name:n,outStatistic:{onStatisticField:s,onStatisticValueExpression:t,statisticType:i}}),n}function ae(e,t,i,s){if("cluster_count"===t||e.some((e=>e.name===t)))return t;const n=function(e,t,i){switch(e){case"avg":case"avg_angle":return`cluster_avg_${t}`;case"mode":return`cluster_type_${t}`;case"norm":{const e=i,s="field",n=t.toLowerCase()+",norm:"+s+","+e.toLowerCase();return"cluster_avg_"+k(n)}}}(i,t,s);return e.some((e=>e.name===n))||("norm"===i?e.push({name:n,outStatistic:{onStatisticField:t,onStatisticNormalizationField:s,statisticType:i}}):e.push({name:n,outStatistic:{onStatisticField:t,statisticType:i}})),n}const le=y.getLogger("esri.renderers.visualVariables.support.utils"),oe=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const t=e.clone(),i=t.visualVariables.map((e=>ce(e)?de(e):e));return t.visualVariables=i,t};function ue(e){return e.map((e=>ce(e)?de(e.clone()):e))}function ce(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function de(e){return e.stops=(t=e.type,(i=e.stops).length<=8?i:(le.warn(`Found ${i.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),i.length>16?function(e,t){const[i,...s]=t,n=s.pop(),r=s[0].value,a=s[s.length-1].value,l=(a-r)/6,o=[];for(let u=r;u<a;u+=l){let i=0;for(;u>=s[i].value;)i++;const n=s[i],r=t[i-1],a=u-r.value,l=n.value===r.value?1:a/(n.value-r.value);if("color"===e){const e=s[i],n=t[i-1],r=e.color.clone();r.r=he(n.color.r,r.r,l),r.g=he(n.color.g,r.g,l),r.b=he(n.color.b,r.b,l),r.a=he(n.color.a,r.a,l),o.push({value:u,color:r,label:e.label})}else if("size"===e){const e=s[i],n=t[i-1],r=_(e.size),a=he(_(n.size),r,l);o.push({value:u,size:a,label:e.label})}else{const e=s[i],n=he(t[i-1].opacity,e.opacity,l);o.push({value:u,opacity:n,label:e.label})}}return[i,...o,n]}(t,i):function(e){const[t,...i]=e,s=i.pop();for(;i.length>6;){let e=0,t=0;for(let s=1;s<i.length;s++){const n=i[s-1],r=i[s],a=Math.abs(r.value-n.value);a>t&&(t=a,e=s)}i.splice(e,1)}return[t,...i,s]}(i))),e;var t,i}function he(e,t,i){return(1-i)*e+i*t}const fe=new T({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function pe(e){return fe.toJSON(e)}const me=y.getLogger("esri.views.2d.layers.features.schemaUtils"),ge={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function ye(e){return J(e)}function xe(e){switch(e.type){case"line-marker":var t;return{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style};default:return z(e.toJSON()).toJSON()}}function be(e,t,i){if(!e)return null;let s=0,n=!1;switch(E(t)&&"visualVariables"in t&&(s=function(e){if(!e)return P.NONE;let t=0;for(const i of e)if("size"===i.type){const e=W(i);t|=e,"outline"===i.target&&(t|=e<<4)}else"color"===i.type?t|=P.COLOR:"opacity"===i.type?t|=P.OPACITY:"rotation"===i.type&&(t|=P.ROTATION);return t}(t.visualVariables||[]),n="dot-density"===t.type),e.type){case"simple-fill":case"picture-fill":return function(e,t,i,s){const n=A($.FILL,t,!1,i),a=s?ye(n):n,l=e.clone(),o=l.outline;l.outline=null;const u=[],c=r({materialKey:a,hash:l.hash()},xe(l));if(u.push(c),o){const e=A($.LINE,t,!0,!1),i=r({materialKey:s?ye(e):e,hash:o.hash()},xe(o));u.push(i)}return{type:"composite-symbol",layers:u,hash:u.reduce(((e,t)=>t.hash+e),"")}}(e,s,n,i);case"simple-marker":case"picture-marker":return function(e,t,i){const s=A($.MARKER,t,!1,!1),n=i?ye(s):s,a=xe(e);return r(r({materialKey:n,hash:e.hash()},a),{angle:e.angle})}(e,s,i);case"simple-line":return function(e,t,i){const s=A($.LINE,t,!1,!1),n=i?ye(s):s,a=e.clone(),l=a.marker;a.marker=null;const o=[];if(o.push(r({materialKey:n,hash:a.hash()},xe(a))),l){var u;const e=A($.MARKER,t,!1,!1),s=i?ye(e):e;l.color=null!=(u=l.color)?u:a.color,o.push(r({materialKey:s,hash:l.hash(),lineWidth:a.width},xe(l)))}return{type:"composite-symbol",layers:o,hash:o.reduce(((e,t)=>t.hash+e),"")}}(e,s,i);case"text":return function(e,t,i){const s=A($.TEXT,t,!1,!1),n=i?ye(s):s,a=xe(e);return r(r({materialKey:n,hash:e.hash()},a),{angle:e.angle})}(e,s,i);case"label":return function(e,t,i){const s=A($.LABEL,t,!1,!1,e.labelPlacement);return r(r({materialKey:i?ye(s):s,hash:e.hash()},e.toJSON()),{labelPlacement:e.labelPlacement})}(e,s,i);case"cim":return{type:"cim",rendererKey:s,data:e.data};case"web-style":return r(r({},xe(e)),{type:"web-style",hash:e.hash(),rendererKey:s});default:throw new Error(`symbol not supported ${e.type}`)}}function ve(e,t){const i=g(e);return i.some((e=>function(e,t){const i=e.labelPlacement,s=ge[t];if(!e.symbol)return me.warn("No LabelClass symbol specified."),!0;if(!s)return me.error(new w("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${t} is not supported`)),!0;if(!s.some((e=>e===i))){const n=s[0];i&&me.warn(`Found invalid label placement type ${i} for ${t}. Defaulting to ${n}`),e.labelPlacement=n}return!1}(e,t)))?[]:i}function we(e){return x("esri-2d-update-debug")&&console.debug("Created new schema",_e(e,!0)),_e(e)}function _e(e,t=!1){try{var i,s;const n=function(e,t=!1){const i=new Array;return i.push(function(e,t,i=!1){const s={indexCount:0,fields:{}},n="featureReduction"in e&&e.featureReduction,r=n?"aggregate":"feature";switch(e.renderer.type){case"heatmap":{const{blurRadius:t,fieldOffset:i,field:n}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:s,target:r,storage:null,mesh:{blurRadius:t,fieldOffset:i,field:ze(s,{target:r,field:n,resultType:"numeric"}).field}}}default:{const t=[],a="aggregate"===r?Q(t,e.renderer,n,null):e.renderer;!function(e,t){const i={mesh:!0,storage:!0};for(const s of t){const{name:t,outStatistic:n}=s,{statisticType:r,onStatisticField:a}=n;let l=null,o=null,u=null;const c="numeric",d="feature";"onStatisticValueExpression"in n?o=Fe(e,{type:"expression",target:d,valueExpression:n.onStatisticValueExpression,resultType:c}).fieldIndex:"onStatisticNormalizationField"in n?(l=Fe(e,{type:"field",target:d,field:a,resultType:c}).field,u=n.onStatisticNormalizationField):l=Fe(e,{type:"field",target:d,field:a,resultType:c}).field,Fe(e,{type:"statistic",target:"aggregate",name:t,context:i,inField:l,inNormalizationField:u,inFieldIndex:o,statisticType:r})}}(s,t);const l=Ve(s,r,a,i),o=function(e,t,i){switch(i.type){case"dot-density":return s=e,n=t,(r=i.attributes)&&r.length?{type:"dot-density",mapping:r.map(((e,t)=>{const{field:i,fieldIndex:r}=ze(s,{valueExpression:e.valueExpression,field:e.field,resultType:"numeric",target:n});return{binding:t,field:i,fieldIndex:r}})),target:n}:{type:"dot-density",mapping:[],target:n};case"simple":case"class-breaks":case"unique-value":return function(e,t,i){if(!i||!i.length)return{type:"visual-variable",mapping:[],target:t};const s={storage:!0},n="numeric";return{type:"visual-variable",mapping:ue(i).map((i=>{var r;const a=D(i.type),{field:l,fieldIndex:o}=ze(e,{target:t,valueExpression:i.valueExpression,field:i.field,context:s,resultType:n});switch(i.type){case"size":return"$view.scale"===i.valueExpression?null:{type:"size",binding:a,field:l,fieldIndex:o,normalizationField:ze(e,{target:t,field:i.normalizationField,context:s,resultType:n}).field,valueRepresentation:null!=(r=i.valueRepresentation)?r:null};case"color":return{type:"color",binding:a,field:l,fieldIndex:o,normalizationField:ze(e,{target:t,field:i.normalizationField,context:s,resultType:n}).field};case"opacity":return{type:"opacity",binding:a,field:l,fieldIndex:o,normalizationField:ze(e,{target:t,field:i.normalizationField,context:s,resultType:n}).field};case"rotation":return{type:"rotation",binding:a,field:l,fieldIndex:o}}})).filter((e=>e)),target:t}}(e,t,i.visualVariables);case"heatmap":case"dictionary":return null}var s,n,r}(s,r,a),u=pe(e.geometryType);let c=e.labelsVisible&&e.labelingInfo||[],d=[];if(n){if("selection"===n.type)throw new w("ValidationError","Mapview does not support `selection` reduction type",n);d=n&&n.labelsVisible&&n.labelingInfo||[]}c=ve(c,u),d=ve(d,u);let h=0;const f=[...c.map((e=>Me(a,s,e,"feature",h++,i))),...d.map((e=>Me(a,s,e,"aggregate",h++,i)))];return{type:"symbol",target:r,attributes:s,aggregateFields:t,storage:o,mesh:{matcher:l,labels:f}}}}}(e)),i}(e,t),r={};return n.map((t=>function(e,t,i){switch(i.target){case"feature":return void Se(e,Ee(t),i);case"aggregate":{const a=t.featureReduction;if("selection"===a.type)throw new w("ValidationError","Mapview does not support `selection` reduction type",a);return Se(e,Ee(t),i),n=a,r=i,(s=e).aggregate||(s.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:F(n.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(F(n.clusterMaxSize)/64),fields:r.aggregateFields}}),void Te(s.aggregate,r.attributes.fields)}}var s,n,r}(r,e,t))),{source:{definitionExpression:e.definitionExpression,fields:e.fields.map((e=>e.toJSON())),gdbVersion:e.gdbVersion,historicMoment:null==(i=e.historicMoment)?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(s=e.timeExtent)?void 0:s.toJSON()},attributes:{fields:{},indexCount:0},processors:n,targets:r}}catch(n){if("ValidationError"===n.fieldName)return me.error(n),null;throw n}}function Te(e,t){for(const i in t){const s=t[i];if(s.target!==e.name)continue;const n=e.attributes[i];n?(n.context.mesh=n.context.mesh||s.context.mesh,n.context.storage=n.context.storage||s.context.storage):e.attributes[i]=s}return e}function Ee(e){var t,i,s,n,r;return[null!=(t=null==(i=e.filter)?void 0:i.toJSON())?t:null,null!=(s=null==(n=e.effect)||null==(r=n.filter)?void 0:r.toJSON())?s:null]}function Se(e,t,i){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),Te(e.feature,i.attributes.fields),e}function ze(e,t){return t.field?Fe(e,r(r({},t),{type:"field",field:t.field})):t.valueExpression?Fe(e,r(r({},t),{type:"expression",valueExpression:t.valueExpression})):{field:null,fieldIndex:null}}function Fe(e,t){switch(t.type){case"expression":{const i=t.valueExpression;if(!e.fields[i]){const s=e.indexCount++;e.fields[i]=r(r({},t),{name:i,fieldIndex:s})}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(t.label);if(!e.fields[i]){const s=e.indexCount++;e.fields[i]=r(r({},t),{name:i,fieldIndex:s})}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=t.field;return"aggregate"===t.target&&e.fields[i]||(e.fields[i]=r(r({},t),{name:i})),{field:i}}case"statistic":return e.fields[t.name]=r({},t),{field:t.name}}}function Me(e,t,i,s,n,a=!1){const l=Fe(t,{type:"label-expression",target:s,context:{mesh:!0},resultType:"string",label:{labelExpression:i.labelExpression,labelExpressionInfo:i.labelExpressionInfo?{expression:i.labelExpressionInfo.expression}:null,symbol:!!i.symbol,where:i.where}}),{fieldIndex:o}=l;return r(r({},be(i,e,a)),{fieldIndex:o,target:s,index:n})}function Ve(e,t,i,s=!1){const n=S(e,{indexCount:0,fields:{}});switch(i.type){case"simple":case"dot-density":return function(e,t,i,s=!1){const n=t.getSymbols();return{type:"simple",symbol:be(n.length?n[0]:null,t,s),isDotDensity:i}}(0,i,"dot-density"===i.type,s);case"class-breaks":return function(e,t,i,s=!1){const n=i.backgroundFillSymbol,{field:r,fieldIndex:a}=ze(e,{target:t,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:{mesh:!0,use:"renderer.field"}}),l=i.normalizationType,o="log"===l?"esriNormalizeByLog":"percent-of-total"===l?"esriNormalizeByPercentOfTotal":"field"===l?"esriNormalizeByField":null,u=i.classBreakInfos.map((e=>({symbol:be(e.symbol,i,s),min:e.minValue,max:e.maxValue}))).sort(((e,t)=>e.min-t.min));return{type:"interval",attributes:e.fields,field:r,fieldIndex:a,backgroundFillSymbol:be(n,i,s),defaultSymbol:be(i.defaultSymbol,i,s),intervals:u,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:o,isMaxInclusive:i.isMaxInclusive}}(n,t,i,s);case"unique-value":return function(e,t,i,s=!1){const n=[],a=i.backgroundFillSymbol,l={target:t,context:{mesh:!0},resultType:"string"};if(i.field&&"string"!=typeof i.field)throw new w("ValidationError","Expected renderer.field to be a string",i);const{field:o,fieldIndex:u}=ze(e,r(r({},l),{field:i.field,valueExpression:i.valueExpression}));for(const r of i.uniqueValueInfos)n.push({value:""+r.value,symbol:be(r.symbol,i,s)});return{type:"map",attributes:e.fields,field:o,fieldIndex:u,field2:ze(e,r(r({},l),{field:i.field2})).field,field3:ze(e,r(r({},l),{field:i.field3})).field,fieldDelimiter:i.fieldDelimiter,backgroundFillSymbol:be(a,i),defaultSymbol:be(i.defaultSymbol,i),map:n}}(n,t,i,s);case"dictionary":return{type:"dictionary",renderer:i.toJSON()}}}var Ce,Re,Ie;function Le(e){switch(e){case"left":return Ce.Left;case"right":return Ce.Right;case"center":case"justify":return Ce.Center}}function Oe(e){switch(e){case"top":return Re.Top;case"middle":return Re.Center;case"baseline":return Re.Baseline;case"bottom":return Re.Bottom}}function Be(e){switch(e){case"above-left":return[Ce.Right,Re.Bottom];case"above-center":case"above-along":return[Ce.Center,Re.Bottom];case"above-right":return[Ce.Left,Re.Bottom];case"center-left":return[Ce.Right,Re.Center];case"center-center":case"center-along":return[Ce.Center,Re.Center];case"center-right":return[Ce.Left,Re.Center];case"below-left":return[Ce.Right,Re.Top];case"below-center":case"below-along":return[Ce.Center,Re.Top];case"below-right":return[Ce.Left,Re.Top];case"always-horizontal":return[Ce.Center,Re.Baseline];default:return console.debug(`Found invalid placement type ${e}`),[Ce.Center,Re.Center]}}function Ne(e){switch(e){case Ce.Right:return-1;case Ce.Center:return 0;case Ce.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${e}`),0}}function ke(e){switch(e){case Re.Top:return 1;case Re.Center:return 0;case Re.Bottom:case Re.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function Pe(e){switch(e){case"left":return Ce.Left;case"right":return Ce.Right;case"center":case"justify":return Ce.Center}}(Ie=Ce||(Ce={}))[Ie.Left=-1]="Left",Ie[Ie.Center=0]="Center",Ie[Ie.Right=1]="Right",function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(Re||(Re={}));const $e=Math.PI/180;class De{constructor(e,t,i,s){this._rotationT=V(),this._xBounds=0,this._yBounds=0,this.minZoom=0,this.maxZoom=255;const n=i.rect,r=new Float32Array(8);e*=s,t*=s;const a=i.code?n.width*s:i.metrics.width,l=i.code?n.height*s:i.metrics.height;r[0]=e,r[1]=t,r[2]=e+a,r[3]=t,r[4]=e,r[5]=t+l,r[6]=e+a,r[7]=t+l,this._data=r,this._setTextureCoords(n),this._scale=s,this._mosaic=i,this.x=e,this.y=t}get width(){return this._mosaic.metrics.width*this._scale}get mosaic(){return this._mosaic}set angle(e){this._angle=e,B(this._rotationT),O(this._rotationT,this._rotationT,-e),this._setOffsets(this._data)}get angle(){return this._angle}get xTopLeft(){return this._data[0]}get yTopLeft(){return this._data[1]}get xBottomRight(){return this._data[6]}get yBottomRight(){return this._data[7]}get texcoords(){return this._texcoords}get textureBinding(){return this._mosaic.textureBinding}get offsets(){return this._offsets||this._setOffsets(this._data),this._offsets}get char(){return String.fromCharCode(this._mosaic.code)}get code(){return this._mosaic.code}get bounds(){const{height:e,width:t}=this._mosaic.metrics,i=t*this._scale,s=Math.abs(e)*this._scale,n=new Float32Array(8);n[0]=this.x,n[1]=this.y,n[2]=this.x+i,n[3]=this.y,n[4]=this.x,n[5]=this.y+s,n[6]=this.x+i,n[7]=this.y+s;const r=C(V(),this._rotationT,this._T);N(n,n,r);let a=1/0,l=1/0,o=0,u=0;for(let h=0;h<4;h++){const e=n[2*h],t=n[2*h+1];a=Math.min(a,e),l=Math.min(l,t),o=Math.max(o,e),u=Math.max(u,t)}const c=o-a,d=u-l;return new U(a+c/2,l+d/2,c,d)}setTransform(e){this._T=e,this._offsets=null}_setOffsets(e){this._offsets||(this._offsets={upperLeft:0,upperRight:0,lowerLeft:0,lowerRight:0});const t=this._offsets,i=new Float32Array(8),s=C(V(),this._rotationT,this._T);N(i,e,s),t.upperLeft=j(8*i[0],8*i[1]),t.upperRight=j(8*i[2],8*i[3]),t.lowerLeft=j(8*i[4],8*i[5]),t.lowerRight=j(8*i[6],8*i[7])}_setTextureCoords({x:e,y:t,width:i,height:s}){this._texcoords={upperLeft:j(e,t),upperRight:j(e+i,t),lowerLeft:j(e,t+s),lowerRight:j(e+i,t+s)}}}const je=(e,t)=>({code:0,page:0,sdf:!0,rect:new K(0,0,11,8),textureBinding:t,metrics:{advance:0,height:4,width:e,left:0,top:0}});class Ae{constructor(e,t,i){this._rotation=0,this._decorate(e,t,i),this.glyphs=e,this.bounds=this._createBounds(e),this.isMultiline=t.length>1,this._hasRotation=0!==i.angle,this._T=this._createGlyphTransform(this.bounds,i);for(const s of e)s.setTransform(this._T)}setRotation(e){if(0===e&&0===this._rotation)return;this._rotation=e;const t=this._T,i=M(V(),e);C(t,i,t);for(const s of this.glyphs)s.setTransform(this._T)}_decorate(e,t,i){if(!i.decoration||"none"===i.decoration||!e.length)return;const s=i.scale,n="underline"===i.decoration?30:20,r=e[0].textureBinding;for(const a of t){const t=a.startX*s,i=a.startY*s,l=(a.width+a.glyphWidthEnd)*s;e.push(new De(t,i+n*s,je(l,r),1))}}get boundsT(){const e=this.bounds,t=R(o(),e.x,e.y);if(I(t,t,this._T),this._hasRotation){const i=Math.max(e.width,e.height);return new U(t[0],t[1],i,i)}return new U(t[0],t[1],e.width,e.height)}_createBounds(e){let t=1/0,i=1/0,s=0,n=0;for(const l of e)t=Math.min(t,l.xTopLeft),i=Math.min(i,l.yTopLeft),s=Math.max(s,l.xTopLeft+l.width),n=Math.max(n,l.yBottomRight);const r=s-t,a=n-i;return new U(t+r/2,i+a/2,r,a)}_createGlyphTransform(e,t){const i=$e*t.angle,s=V(),n=o();return L(s,s,R(n,t.xOffset,-t.yOffset)),t.isCIM?O(s,s,i):(L(s,s,R(n,e.x,e.y)),O(s,s,i),L(s,s,R(n,-e.x,-e.y))),s}}class Je{constructor(e,t,i,s,n,r){this.glyphWidthEnd=0,this.startX=0,this.startY=0,this.start=Math.max(0,Math.min(t,i)),this.end=Math.max(0,Math.max(t,i)),this.end<e.length&&(this.glyphWidthEnd=e[this.end].metrics.width),this.width=s,this.yMin=n,this.yMax=r}}const We=e=>10===e,Ke=e=>32===e;function Ge(e,t,i){const s=i.scale,n=new Array,r=function(e,t,i){const s=new Array,n=1/i.scale,r=i.maxLineWidth*n,a=t?e.length-1:0,l=t?-1:e.length,o=t?-1:1;let u=a,c=0,d=0,h=u,f=h,p=0,m=1/0,g=0;for(;u!==l;){const{code:t,metrics:i}=e[u],n=Math.abs(i.top);if(We(t)||Ke(t)||(m=Math.min(m,n),g=Math.max(g,n+i.height)),We(t))u!==a&&(s.push(new Je(e,h,u-o,c,m,g)),m=1/0,g=0),c=0,h=u+o,f=u+o,d=0;else if(Ke(t))f=u+o,d=0,p=i.advance,c+=i.advance;else if(c>r){if(f!==h){const t=f-2*o;c-=p,s.push(new Je(e,h,t,c-d,m,g)),m=1/0,g=0,h=f,c=d}else s.push(new Je(e,h,u-o,c,m,g)),m=1/0,g=0,h=u,f=u,c=0;c+=i.advance,d+=i.advance}else c+=i.advance,d+=i.advance;u+=o}const y=new Je(e,h,u-o,c,m,g);return y.start>=0&&y.end<e.length&&s.push(y),s}(e,t,i),a=function(e,t){let i=0;for(let r=0;r<e.length;r++){const{width:t}=e[r];i=Math.max(t,i)}const s="underline"===t.decoration?4:0,n=e[0].yMin;return{x:0,y:n,height:e[e.length-1].yMax+t.lineHeight*(e.length-1)+s-n,width:i}}(r,i),{vAlign:l,hAlign:o}=i,u=l===Re.Baseline?1:0,c=u?0:l-1,d=(1-u)*-a.y+c*(a.height/2)+-26*(u?1:0);for(let h=0;h<r.length;h++){const{start:t,end:a,width:l}=r[h];let u=-1*(o+1)*(l/2)-3;const c=h*i.lineHeight+d-3;r[h].startX=u,r[h].startY=c;for(let i=t;i<=a;i++){const t=e[i];if(We(t.code))continue;const r=new De(u+t.metrics.left,c-t.metrics.top,t,s);u+=t.metrics.advance,n.push(r)}}return new Ae(n,r,i)}export{we as E,Ge as T,Le as a,Be as b,Ne as c,pe as d,U as e,ee as f,ie as g,Q as h,oe as i,Ve as j,se as m,H as n,ke as o,Oe as r,Pe as s,be as v};