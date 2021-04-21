import{e,y as t,i as s,O as i,m as r,k as a,A as l,U as o,cJ as n,el as h,fy as u,fz as d,dw as c,fA as p,fB as m,fC as _,q as f,f_ as y,f$ as b,g0 as g,dT as x,cO as T,g as w,fq as I,fQ as v,ft as P,ct as R,z as U,d4 as S,fr as C,fs as z,bh as k,c4 as G,da as V,bk as L,cz as B,fW as q,bb as D}from"./vendor.1ee57f36.js";import{n as F,u as j}from"./pixelUtils.d13a81d6.js";import{y as E,a as O,u as M,d as A,s as Q,i as N}from"./RawBlockCache.0408d838.js";import{l as W,p as J}from"./LayerView2D.5b971eca.js";import{a as H}from"./drapedUtils.0dafd493.js";import{d as K}from"./popupUtils.51a8577b.js";import{I as $}from"./Utils.88967ee0.js";import{g as X}from"./WGLContainer.df898e6a.js";import{d as Y}from"./TileContainer.7d423330.js";import"./Container.c19388ee.js";import"./mat4f32.65c405e6.js";import"./ShaderCompiler.00c23a07.js";import"./Program.76c009ec.js";import"./GeometryUtils.4f6b8486.js";import"./MaterialKey.464cac5a.js";import"./earcut.4e65dd4c.js";const Z=n=>{let h=class extends n{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.fullExtent=null,this.tileInfo=null,this.datumTransformation=null}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}async fetchPopupFeatures(e,t){const{layer:s}=this;if(!e)return i(new r("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:s}));const{popupEnabled:o}=s,n=K(s,t);if(!o||!a(n))throw new r("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:o,popupTemplate:n});const h=[],{value:u}=await s.identify(e);if(u){var d,c;const e=u.join(", "),t={ObjectId:0},i="Raster.ServicePixelValue";t[i]=this._formatAttributeValue(e,i);const r=null==(d=s.rasterInfo)||null==(c=d.attributeTable)?void 0:c.features;if(r&&r.length>0){const s=r.filter((t=>{const s=t.attributes.value||t.attributes.Value||t.attributes.VALUE;return String(s)===e}));if(s.length>0){const e=s[0];if(e)for(const s in e.attributes)if(e.attributes.hasOwnProperty(s)){const i=this._rasterFieldPrefix+s;t[i]=this._formatAttributeValue(e.attributes[s],i)}}}const a=new l(this.fullExtent.clone(),null,t);a.layer=s,a.sourceLayer=a.layer,h.push(a)}return h}updateFullExtent(){const e=this.layer.tileInfo;let t;e&&e.spatialReference||(t=new r("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));const s=E(this.layer.fullExtent,this.view.spatialReference,this.datumTransformation);return null==s&&(t=new r("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})),this._set("fullExtent",s),t?i(t):o()}_formatAttributeValue(e,t){if("string"==typeof e){const s=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,i=this._getFieldInfo(s,t),r=i&&i.format;if(r){let t,s;return e.trim().indexOf(",")>-1?(t=",",s=t+" ",this._formatDelimitedString(e,t,s,r)):e.trim().indexOf(" ")>-1?(t=s=" ",this._formatDelimitedString(e,t,s,r)):this._formatNumberFromString(e,r)}}return e}_getFieldInfo(e,t){if(!e||!e.length||!t)return;const s=t.toLowerCase();let i;return e.some((e=>!(!e.fieldName||e.fieldName.toLowerCase()!==s&&e.fieldName.toLowerCase()!==s.replace(/ /g,"_")||(i=e,0)))),i}_formatDelimitedString(e,t,s,i){return e&&t&&s&&i?e.trim().split(t).map((e=>this._formatNumberFromString(e,i))).join(s):e}_formatNumberFromString(e,t){if(!e||!t)return e;const s=Number(e);return isNaN(s)?e:t.format(s)}};return e([t()],h.prototype,"layer",void 0),e([t()],h.prototype,"view",void 0),e([t()],h.prototype,"fullExtent",void 0),e([t()],h.prototype,"tileInfo",void 0),e([t({readOnly:!0,dependsOn:["layer.renderer"]})],h.prototype,"hasTilingEffects",null),h=e([s("esri.views.layers.ImageryTileLayerView")],h),h},ee={bandCount:3,outMin:0,outMax:1,minCutOff:[0,0,0],maxCutOff:[255,255,255],factor:[1/255,1/255,1/255],useGamma:!1,gamma:[1,1,1],gammaCorrection:[1,1,1],colormap:null,colormapOffset:null,type:"stretch"};class te extends n{constructor(e=null,t=null,s=null){super(),this._textureInvalidated=!0,this._memoryUsed=null,this._supportsBilinear=!0,this.stencilRef=0,this.coordScale=[1,1],this._symbolizerParameters=null,this.height=null,this.isRendereredSource=!1,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this.rawPixelData=null,this._suspended=!1,this._bandIds=null,this._interpolation=null,this._transformGrid=null,this.width=null,this.x=0,this.y=0,this.transforms={dvs:h()},this.source=e,this.transformGrid=t,this.interpolation=s}get symbolizerParameters(){return this._symbolizerParameters||ee}set symbolizerParameters(e){this._symbolizerParameters=e}get source(){return this._source}set source(e){this._source=e,this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=null,this._rasterTextureBandIds=null,this._memoryUsed=null)}get suspended(){return this._suspended}set suspended(e){this._suspended&&!e&&this.stage&&(this.ready(),this.requestRender()),this._suspended=e}get bandIds(){return this._bandIds}set bandIds(e){this._bandIds=e,this.invalidateTexture()}get interpolation(){return this._interpolation}set interpolation(e){this._interpolation=e,this._rasterTexture&&this._rasterTexture.setSamplingMode(!this._supportsBilinear||"bilinear"!==e&&"cubic"!==e?9728:9729)}get transformGrid(){return this._transformGrid}set transformGrid(e){this._transformGrid=e,this._transformGridTexture&&(this._transformGridTexture.dispose(),this._transformGridTexture=null,this._memoryUsed=null)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRender())}setTransform(e){const t=u(this.transforms.dvs),[s,i]=e.toScreenNoRotation([0,0],this.x,this.y),r=this.resolution/this.pixelRatio/e.resolution,a=r*this.width,l=r*this.height,o=Math.PI*this.rotation/180;d(t,t,c(s,i)),d(t,t,c(a/2,l/2)),p(t,t,-o),d(t,t,c(-a/2,-l/2)),m(t,t,c(a,l)),_(this.transforms.dvs,e.displayViewMat3,t)}getTextures(){if(!this._rasterTexture)return null;const e=[],t=[];return this._transformGridTexture&&(t.push(this._transformGridTexture),e.push("u_transformGrid")),this._rasterTexture&&(t.push(this._rasterTexture),e.push("u_image")),this._colormapTexture&&(t.push(this._colormapTexture),e.push("u_colormap")),{names:e,textures:t}}getMemoryUsage(){if(f(this._memoryUsed)){const e=this.getTextures();if(null==e)return 0;this._memoryUsed=e.textures.map((e=>e.descriptor.width*e.descriptor.height*4)).reduce(((e,t)=>e+t))}return this._memoryUsed}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}updateTexture({context:e}){var t,s,i;if(!this.stage)return null==(t=this._rasterTexture)||t.dispose(),null==(s=this._transformGridTexture)||s.dispose(),null==(i=this._colormapTexture)||i.dispose(),this._rasterTexture=null,this._rasterTextureBandIds=null,this._transformGridTexture=null,void(this._colormapTexture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1;const r=this.source,a=r&&r.pixels&&r.pixels.length>0;this._createOrDestroyRasterTexture(e),this._rasterTexture&&(a?(this._updateColormapTexture(e),this.transformGrid&&!this._transformGridTexture&&(this._transformGridTexture=y(e,this.transformGrid))):this._rasterTexture.setData(null)),this.suspended||(this.ready(),this.requestRender())}_createOrDestroyRasterTexture(e){var t,s;const i=this.source?F(this.source,this.bandIds):null;if(!(i&&i.pixels&&i.pixels.length>0))return void(this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTextureBandIds=null,this._rasterTexture=null));const r=null==this._rasterTextureBandIds&&null==this.bandIds||this._rasterTextureBandIds&&this.bandIds&&this._rasterTextureBandIds.join("")===this.bandIds.join("");if(this._rasterTexture){if(r)return;this._rasterTexture.dispose(),this._rasterTextureBandIds=null,this._rasterTexture=null}const a=this.interpolation||"nearest",l=this.isRendereredSource||!(null!=(t=e.capabilities.textureFloat)&&t.textureFloat);this._rasterTexture=b(e,i,a,l),this._supportsBilinear=null==(s=e.capabilities.textureFloat)?void 0:s.textureFloatLinear,this._rasterTextureBandIds=this.bandIds}_updateColormapTexture(e){const t=this._colormap,s=this.symbolizerParameters.colormap;return s?t?s.length!==t.length||s.some(((e,s)=>e!==t[s]))?(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this._colormapTexture=g(e,s),void(this._colormap=s)):void 0:(this._colormapTexture=g(e,s),void(this._colormap=s)):(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),void(this._colormap=null))}}class se extends x{constructor(e,t,s,i=null){super(e,t,s),this.bitmap=new te(i,null,null),this.bitmap.coordScale=s,this.bitmap.once("isReady",(()=>this.ready()))}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}getMemoryUsage(){return this.bitmap.getMemoryUsage()}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}release(){return this.destroy(),this.bitmap=null,this.stage=null,!0}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap.stage=null}}class ie extends Y{createTile(e){const t=this._tileInfoView.getTileBounds(T(),e);return new se(e,t,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[X.raster],target:()=>this.children.map((e=>e.bitmap)),drawPhase:$.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===$.MAP&&super.doRender(e)}}const re=w.getLogger("esri.views.2d.layers.ImageryTileLayerView2D"),ae=[0,0];let le=class extends(Z(I(W(J)))){constructor(){super(...arguments),this._tileStrategy=null,this._tileInfoView=null,this._fetchQueue=null,this._blockCacheRegistryUrl=null,this._blockCacheRegistryId=null,this._bitmapView=null,this._emptyTilePixelBlock=null,this._srcResolutions=null,this._previousLOD=null,this._needBlockCacheUpdate=!1,this._globalSymbolizerParams=null,this._symbolizerParams=null,this._abortController=null,this._globalUpdateRequested=!1,this.useWebGLForProcessing=!0,this.datumTransformation=null,this._redrawDebounced=v((e=>this._redrawImage(e)),2e3)}initialize(){const e=this.updateFullExtent();this.addResolvingPromise(e)}get useProgressiveUpdate(){return null==this._get("useProgressiveUpdate")||this._get("useProgressiveUpdate")}set useProgressiveUpdate(e){this._tileStrategy&&this.useProgressiveUpdate!==e&&(this._tileStrategy.destroy(),this._bitmapView.removeAllChildren(),this._tileStrategy=new P({cachePolicy:e?"keep":"purge",resampling:!1,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:e?40:0,tileInfoView:this._tileInfoView}),this._set("useProgressiveUpdate",e),this.requestUpdate())}hitTest(e,t){if(this.suspended)return o(null);const s=this.view.toMap(R(e,t));return o(new l({attributes:{},geometry:s}))}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();const{extent:t,resolution:s,scale:i}=e.state,r=this._tileInfoView.getClosestInfoForScale(i);if(this.layer.raster){var a;if(!this.useProgressiveUpdate||this._needBlockCacheUpdate){const e=this._srcResolutions[r.level],i=t.toJSON?t:U.fromJSON(t);O(this._blockCacheRegistryUrl,this._blockCacheRegistryId,i,s,e,this.layer.raster.ioConfig.sampling)}this._needBlockCacheUpdate=!1,(null==(a=this._previousLOD)?void 0:a.level)!==r.level&&(this._previousLOD=r,null!=this._symbolizerParams&&this._updateSymbolizerParams())}this.notifyChange("updating")}attach(){this.layer.increaseRasterJobHandlerUsage(),S().supportsTextureFloat||(this.useWebGLForProcessing=!1),this.layer.raster&&(this.layer.raster.ioConfig.allowPartialFill=!0),this._initializeTileInfo(),this._tileInfoView=new C(this.tileInfo,this.fullExtent),this._fetchQueue=new z({tileInfoView:this._tileInfoView,concurrency:10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new P({cachePolicy:this.useProgressiveUpdate?"keep":"purge",resampling:!1,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:this.useProgressiveUpdate?40:0,tileInfoView:this._tileInfoView}),this._bitmapView=new ie(this._tileInfoView),this.container.addChild(this._bitmapView),this.handles.add([k(this,["layer.bandIds","layer.renderer"],(()=>this._redrawDebounced().catch((e=>{G(e)||re.error(e)})))),k(this,["layer.interpolation"],((e,t)=>{"majority"!==e&&"majority"!==t||!this._canUseMajorityInterpolationOnDataSource()?this._redrawDebounced().catch((e=>{G(e)||re.error(e)})):this.refreshDebounced()})),k(this,["layer.multidimensionalDefinition"],this.refreshDebounced)],"attach"),this._updateBlockCacheRegistry()}detach(){this.handles.remove("attach"),this.layer.decreaseRasterJobHandlerUsage(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null,M(this._blockCacheRegistryUrl,this._blockCacheRegistryId)}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){!this.hasTilingEffects&&this.useProgressiveUpdate||(this._abortController&&this._abortController.abort(),this._abortController=V(),0===this._fetchQueue.length&&this._redrawImage(this._abortController.signal).then((()=>{this._globalUpdateRequested=!1,this.requestUpdate()}))),this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return H(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._updateSymbolizerParams(),this._updateBlockCacheRegistry(),this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"))}isUpdating(){return this._fetchQueue.length>0||this._globalUpdateRequested}acquireTile(e){const t=this._bitmapView.createTile(e),s=t.bitmap;return[s.x,s.y]=this._tileInfoView.getTileCoords(ae,t.key),s.resolution=this._tileInfoView.getTileResolution(t.key),[s.width,s.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this.requestUpdate(),this._needBlockCacheUpdate=!0,this._globalUpdateRequested=this.hasTilingEffects||!this.useProgressiveUpdate,t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>{e.destroy(),this.requestUpdate()})),this.requestUpdate()}fetchTile(e,t){const s=!f(t)&&t.signal,i=this._canUseWebGLForProcessing(),r={tileInfo:this.tileInfo,signal:L(s),registryId:this._blockCacheRegistryId,requestRawData:i,srcResolution:this._srcResolutions[e.level],datumTransformation:this.datumTransformation,interpolation:i?"nearest":this.layer.interpolation};return this.layer.fetchTile(e.level,e.row,e.col,r)}_canUseWebGLForProcessing(){return this.useWebGLForProcessing&&this.layer.symbolizer.canRenderInWebGL&&!("majority"===this.layer.interpolation&&this._canUseMajorityInterpolationOnDataSource())}_initializeTileInfo(){const e=this.view.spatialReference,t=new B({x:this.fullExtent.xmin,y:this.fullExtent.ymax,spatialReference:e}),{scales:s,srcResolutions:i}=A(this.layer.rasterInfo,e),r=q.create({spatialReference:e,size:512,scales:s});(0===r.origin.x||r.origin.x>t.x)&&(r.origin=t),this._set("tileInfo",r),this._srcResolutions=null!=i?i:[]}async _enqueueTileFetch(e,t){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key),{bandIds:i}=this.layer;let r=!this.useProgressiveUpdate||this.hasTilingEffects&&!this._globalSymbolizerParams;if(this._globalUpdateRequested&&!this.moving&&0===this._fetchQueue.length){r=!1;try{await this._redrawImage(this._abortController&&this._abortController.signal)}catch(s){G(s)&&re.error(s)}this._globalUpdateRequested=!1}const a=this._canUseWebGLForProcessing();if(a&&!this.hasTilingEffects&&null==this._symbolizerParams&&this._updateSymbolizerParams(),t&&t.pixelBlock){if(a)e.bitmap.source=t.pixelBlock,e.bitmap.isRendereredSource=!1;else{const s={extent:t.extent,pixelBlock:t.pixelBlock},i=await this.layer.applyRenderer(s,this.hasTilingEffects&&this._globalSymbolizerParams&&"stretch"===this._globalSymbolizerParams.type?this._globalSymbolizerParams:null);e.bitmap.rawPixelData=s,e.bitmap.source=i,e.bitmap.isRendereredSource=!0}e.bitmap.symbolizerParameters=a?this._globalSymbolizerParams||this._symbolizerParams:null,!e.bitmap.transformGrid&&a?e.bitmap.transformGrid=t.transformGrid:e.bitmap.transformGrid=null}else{const t=this._createEmptyTilePixelBlock();e.bitmap.source=t,e.bitmap.symbolizerParameters=a?this._symbolizerParams:null,e.bitmap.transformGrid=null}e.bitmap.bandIds=i,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.bitmap.interpolation=this._getLayerInterpolation(),e.bitmap.suspended=r,e.bitmap.invalidateTexture(),e.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(e)}catch(s){G(s)||re.error(s)}this.requestUpdate()}}async _redrawImage(e){this.layer.updateRenderer(),this.hasTilingEffects?await this._updateGlobalSymbolizerParams(e):(this._updateSymbolizerParams(),this._globalSymbolizerParams=null);const{bandIds:t}=this.layer,s=this._bitmapView.children.map((async e=>{const s=this._canUseWebGLForProcessing();s?e.bitmap.isRendereredSource=!1:(e.bitmap.source=await this.layer.applyRenderer(e.bitmap.rawPixelData,this.hasTilingEffects&&this._globalSymbolizerParams&&"stretch"===this._globalSymbolizerParams.type?this._globalSymbolizerParams:null),e.bitmap.isRendereredSource=!0),e.bitmap.symbolizerParameters=s?this._globalSymbolizerParams||this._symbolizerParams:null,e.bitmap.bandIds=t,e.bitmap.interpolation=this._getLayerInterpolation(),e.bitmap.suspended=!1}));await D(s),this.container.requestRender()}_createEmptyTilePixelBlock(){if(!this._emptyTilePixelBlock){const e=this._tileInfoView.tileInfo.size[0],t=this._tileInfoView.tileInfo.size[1];this._emptyTilePixelBlock=new j({width:e,height:t,pixels:[new Uint8Array(e*t)],mask:new Uint8Array(e*t),pixelType:"u8"})}return this._emptyTilePixelBlock}async _updateGlobalSymbolizerParams(e){const t={srcResolution:this._srcResolutions[this._previousLOD.level],registryId:this._blockCacheRegistryId,signal:e},s=await this.layer.fetchPixels(this.view.extent,this.view.width,this.view.height,t);if(!s||!s.pixelBlock)return;const i=this.layer.symbolizer.generateWebGLParameters({pixelBlock:F(s.pixelBlock,this.layer.bandIds),isGCS:this.view.spatialReference.isGeographic,resolution:{x:this._previousLOD.resolution,y:this._previousLOD.resolution},bandIds:this.layer.bandIds});!this._canUseWebGLForProcessing()&&i&&"stretch"===i.type&&this.layer.renderer&&"raster-stretch"===this.layer.renderer.type&&(i.factor=i.factor.map((e=>255*e)),i.outMin=Math.round(255*i.outMin),i.outMax=Math.round(255*i.outMax)),this._globalSymbolizerParams=i}_updateSymbolizerParams(){this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null,isGCS:this.view.spatialReference.isGeographic,resolution:{x:this._previousLOD.resolution,y:this._previousLOD.resolution},bandIds:this.layer.bandIds})}_updateBlockCacheRegistry(){const{url:e,rasterInfo:t,multidimensionalDefinition:s,raster:i}=this.layer,r=null!=t&&t.multidimensionalInfo?i.getSliceIndex(s):null,a=N(e,r);a!==this._blockCacheRegistryUrl&&(null==this._blockCacheRegistryUrl&&M(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryId=Q(a,this.layer.raster.rasterInfo),this._blockCacheRegistryUrl=a)}_canUseMajorityInterpolationOnDataSource(){const{bandCount:e,attributeTable:t,colormap:s,pixelType:i}=this.layer.rasterInfo;return 1===e&&(null!=t||null!=s||"u8"===i||"s8"===i)}_getLayerInterpolation(){const e=this.layer.renderer.type;return"raster-colormap"===e||"unique-value"===e||"class-breaks"===e?"nearest":this.layer.interpolation}};e([t()],le.prototype,"useProgressiveUpdate",null),le=e([s("esri.views.2d.layers.ImageryTileLayerView2D")],le);var oe=le;export default oe;