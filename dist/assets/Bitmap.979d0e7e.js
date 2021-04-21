import{cJ as t,el as e,fy as i,fz as s,dw as r,fA as h,fB as n,fC as o,bG as a}from"./vendor.1ee57f36.js";class u{constructor(t,e,i){this.pixelBlock=t,this.extent=e,this.originalPixelBlock=i}get width(){return this.pixelBlock?this.pixelBlock.width:0}get height(){return this.pixelBlock?this.pixelBlock.height:0}render(t){const e=this.pixelBlock;if(!e)return;const i=this.filter({pixelBlock:e}),s=i.pixelBlock.getAsRGBA(),r=t.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),t.putImageData(r,0,0)}getRenderedRasterPixels(){const t=this.filter({pixelBlock:this.pixelBlock});return{width:t.pixelBlock.width,height:t.pixelBlock.height,renderedRasterPixels:new Uint8Array(t.pixelBlock.getAsRGBA().buffer)}}}function d(t,e,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(s.width=e,s.height=i),new a(t,s)}class l extends t{constructor(t=null,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.transforms={dvs:e()},this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}setTransform(t){const e=i(this.transforms.dvs),[a,u]=t.toScreenNoRotation([0,0],this.x,this.y),d=this.resolution/this.pixelRatio/t.resolution,l=d*this.width,c=d*this.height,x=Math.PI*this.rotation/180;s(e,e,r(a,u)),s(e,e,r(l/2,c/2)),h(e,e,-x),s(e,e,r(-l/2,-c/2)),n(e,e,r(l,c)),o(this.transforms.dvs,t.displayViewMat3,e)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind({context:t},e){this._texture&&t.bindTexture(this._texture,e)}updateTexture({context:t}){var e;if(!this.stage)return null==(e=this._texture)||e.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=d(t,this.sourceWidth,this.sourceHeight):this._texture=d(t));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(s=i)&&"render"in s)if(i instanceof u){const t=i.getRenderedRasterPixels();this._texture.setData(t.renderedRasterPixels)}else this._texture.setData(function(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}(i));else(function(t){return t&&!("render"in t)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null);var s}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}export{l as c,u as h};