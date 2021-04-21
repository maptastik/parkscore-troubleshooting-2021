import{dT as e,cO as t}from"./vendor.1ee57f36.js";import{I as s}from"./Utils.88967ee0.js";import{g as r}from"./WGLContainer.df898e6a.js";import{d as i}from"./TileContainer.7d423330.js";import{c as a}from"./Bitmap.979d0e7e.js";class n extends e{constructor(e,t,s,r=null){super(e,t,s,s),this.bitmap=new a(r),this.bitmap.coordScale=s,this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap.stage=null}}class o extends i{createTile(e){const s=this._tileInfoView.getTileBounds(t(),e);return new n(e,s,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[r.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:s.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===s.MAP&&super.doRender(e)}}export{o};