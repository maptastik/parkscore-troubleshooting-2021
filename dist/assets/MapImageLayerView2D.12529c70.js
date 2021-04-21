var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,s=(e,s)=>{for(var o in s||(s={}))t.call(s,o)&&i(e,o,s[o]);if(a)for(var o of a(s))r.call(s,o)&&i(e,o,s[o]);return e};import{e as o,y as p,i as n,O as m,m as l,aZ as d,k as u,bb as h,fF as c,g as y,fq as g,c4 as f,bf as v}from"./vendor.1ee57f36.js";import{y as b}from"./index.4894e768.js";import{l as w,p as j}from"./LayerView2D.5b971eca.js";import{a as x}from"./drapedUtils.0dafd493.js";import{n as P}from"./clickToleranceUtils.108d5e26.js";import{i as C,d as I}from"./popupUtils.51a8577b.js";import{t as U}from"./BitmapContainer.5579ad62.js";import{w as E}from"./ExportStrategy.9f412349.js";import"./Container.c19388ee.js";import"./mat4f32.65c405e6.js";import"./Utils.88967ee0.js";import"./WGLContainer.df898e6a.js";import"./ShaderCompiler.00c23a07.js";import"./Program.76c009ec.js";import"./GeometryUtils.4f6b8486.js";import"./MaterialKey.464cac5a.js";import"./earcut.4e65dd4c.js";import"./Bitmap.979d0e7e.js";const S=e=>{let t=class extends e{async fetchPopupFeatures(e,t){const{layer:a}=this;if(!e)return m(new l("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const r=this.get("view.scale"),i=[],o=async e=>{const a=0===e.minScale||r<=e.minScale,p=0===e.maxScale||r>=e.maxScale;if(e.visible&&a&&p)if(e.sublayers)e.sublayers.forEach(o);else if(e.popupEnabled){const a=I(e,s(s({},t),{defaultPopupTemplateEnabled:!1}));u(a)&&i.push({sublayer:e,popupTemplate:a})}},p=a.sublayers.toArray().map(o);await d(p);const n=i.map((async({sublayer:a,popupTemplate:r})=>{await a.load().catch((()=>{}));const i=a.createQuery(),s=u(t)?t.event:null,o=P({renderer:a.renderer,event:s}),p=this.createFetchPopupFeaturesQueryGeometry(e,o);i.geometry=p,i.outFields=await C(a,r);const n=await this._loadArcadeModules(r);return n&&n.arcadeUtils.hasGeometryOperations(r)||(i.maxAllowableOffset=p.width/o),(await a.queryFeatures(i)).features}));return(await h(n)).reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}canResume(){var e,t;return!(!super.canResume()||null!=(e=this.imageParameters)&&null!=(t=e.timeExtent)&&t.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return c()}};return o([p()],t.prototype,"imageParameters",void 0),o([p()],t.prototype,"layer",void 0),o([p({dependsOn:["imageParameters.timeExtent"]})],t.prototype,"suspended",void 0),t=o([n("esri.views.layers.MapImageLayerView")],t),t},_=y.getLogger("esri.views.2d.layers.MapImageLayerView2D");let M=class extends(S(g(w(j)))){constructor(){super(...arguments),this._exportImageVersion=-1}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{f(e)||_.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:a}=this.layer,r=a>=10.3,i=a>=10;this._bitmapContainer=new U,this.container.addChild(this._bitmapContainer),this.strategy=new E({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:r,imageNormalizationSupported:i,hidpi:!0}),this.imageParameters=new b({view:this.view,layer:this.layer}),this.handles.add(v(this.imageParameters,"version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),"mapimagelayerview-update")}detach(){this.strategy.destroy(),this.handles.remove("mapimagelayerview-update"),this.imageParameters.destroy(),this.imageParameters=null,this._exportImageVersion=-1,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return x(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,a,r){return this.layer.fetchImage(e,t,a,s({timeExtent:this.imageParameters.timeExtent,timestamp:this.refreshTimestamp},r))}};o([p()],M.prototype,"strategy",void 0),o([p({dependsOn:["strategy.updating"]})],M.prototype,"updating",void 0),M=o([n("esri.views.2d.layers.MapImageLayerView2D")],M);var O=M;export default O;