var e=Object.defineProperty,r=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,o=(r,t,s)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s,n=(e,n)=>{for(var a in n||(n={}))r.call(n,a)&&o(e,a,n[a]);if(t)for(var a of t(n))s.call(n,a)&&o(e,a,n[a]);return e};import{f1 as a,m as l}from"./vendor.1ee57f36.js";let u;function c(e,r={}){let t=r.responseType;t?"json"!==t&&"text"!==t&&"blob"!==t&&"array-buffer"!==t&&(t="text"):t="json";const s=r&&r.signal;return delete r.signal,a.invokeStaticMessage("request",{url:e,options:r},{signal:s}).then((s=>{const o=s.data;let a,c,i,b;if(o&&!("json"!==t&&"text"!==t&&"blob"!==t||(a=new Blob([o]),"json"!==t&&"text"!==t||(u||(u=new FileReaderSync),c=u.readAsText(a),"json"!==t)))){try{i=JSON.parse(c||null)}catch(p){const t=n(n({},p),{url:e,requestOptions:r});throw new l("request:server",p.message,t)}if(i.error){const t=n(n({},i.error),{url:e,requestOptions:r});throw new l("request:server",i.error.message,t)}}switch(t){case"json":b=i;break;case"text":b=c;break;case"blob":b=a;break;default:b=o}return{data:b,requestOptions:r,ssl:s.ssl,url:e}}))}export{c as execute};