import{e,y as t,i,O as s,m as r,bb as a,k as l,g as n,fq as h,fr as o,fs as c,ft as u,q as p,c4 as m,bR as f}from"./vendor.1ee57f36.js";import{l as y,p as d}from"./LayerView2D.5b971eca.js";import{a as g}from"./drapedUtils.0dafd493.js";import{n as w}from"./clickToleranceUtils.108d5e26.js";import{i as _}from"./BitmapTileLayerView2D.4b3e9ad6.js";import"./Container.c19388ee.js";import"./mat4f32.65c405e6.js";import"./BitmapTileContainer.407aeb73.js";import"./Utils.88967ee0.js";import"./WGLContainer.df898e6a.js";import"./ShaderCompiler.00c23a07.js";import"./Program.76c009ec.js";import"./GeometryUtils.4f6b8486.js";import"./MaterialKey.464cac5a.js";import"./earcut.4e65dd4c.js";import"./TileContainer.7d423330.js";import"./Bitmap.979d0e7e.js";const v=n=>{let h=class extends n{async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)return s(new r("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));if("tile"!==i.type)return s(new r("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:i.type}));const n=this.get("view.scale"),h=i.allSublayers.toArray().filter((e=>{const t=0===e.minScale||n<=e.minScale,i=0===e.maxScale||n>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&i}));return a(h.map((async i=>{const s=i.createQuery(),r=l(t)?t.event:null,a=w({renderer:i.renderer,event:r});return s.geometry=this.createFetchPopupFeaturesQueryGeometry(e,a),s.outFields=await i.popupTemplate.getRequiredFields(),(await i.queryFeatures(s)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return e([t()],h.prototype,"layer",void 0),h=e([i("esri.layers.mixins.TileLayerView")],h),h},I=n.getLogger("esri.views.2d.layers.TileLayerView2D"),T=[0,0];let V=class extends(v(h(_(y(d))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}initialize(){const e=this.layer.tileInfo,t=e&&e.spatialReference;let i;t||(i=new r("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),t.equals(this.view.spatialReference)||(i=new r("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(()=>{this.refresh()})),i&&this.addResolvingPromise(s(i))}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new o(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new c({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new u({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return g(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"))}isUpdating(){var e;return(null==(e=this._fetchQueue)?void 0:e.length)>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(T,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e,t){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,s=!p(t)&&t.signal;if(!i)try{return await this._fetchImage(e,s)}catch(o){if(!m(o)&&!this.resampling)return this._createBlankImage();throw o}const r=new f(0,0,0,0);let a;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,r,{signal:s}),r.level!==e.level&&!this.resampling)return this._createBlankImage();a=await this._fetchImage(r,s)}catch(c){if(m(c))throw c;a=await this._fetchImage(e,s)}const{level:l,row:n,col:h}=r;return this.resampling&&l!==e.level?this._resampleImage(a,l,n,h,e.level,e.row,e.col):a}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(t){m(t)||I.error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp,signal:t})}_resampleImage(e,t,i,s,r,a,l){const n=this._tileInfoView.tileInfo.size,h=this._tileInfoView.getTileResolution(t),o=this._tileInfoView.getTileResolution(r);let c=this._tileInfoView.getLODInfoAt(r);const u=c.getXForColumn(l),p=c.getYForRow(a);c=this._tileInfoView.getLODInfoAt(t);const m=c.getXForColumn(s),f=c.getYForRow(i),y=Math.round((u-m)/h),d=Math.round(-(p-f)/h),g=Math.round(n[0]*(o/h)),w=Math.round(n[1]*(o/h)),_=this._createBlankImage();return _.getContext("2d").drawImage(e,y,d,g,w,0,0,n[0],n[1]),_}_createBlankImage(){const e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return[t.width,t.height]=e,t}};e([t({dependsOn:["layer.resampling?"]})],V.prototype,"resampling",null),V=e([i("esri.views.2d.layers.TileLayerView2D")],V);var q=V;export default q;