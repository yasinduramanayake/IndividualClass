import{p as F,l as M,m as a,c as f,t as Q,g as $,s as d,r as G,x as B,aq as J,ar as K,R as X,h as Y,M as U,N as Z,L as p,A as ee,j as te,Q as ae,o as re,as as ne}from"./index-Djy0usjt.js";import{m as W,o as le,x as ie,b as x,e as se,N as oe,O as ue,f as ce,i as de,M as h}from"./VBtn--MLb7SCh.js";function ve(e){return{aspectStyles:f(()=>{const c=Number(e.aspectRatio);return c?{paddingBottom:String(1/c*100)+"%"}:void 0})}}const A=F({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...W(),...le()},"VResponsive"),j=M()({name:"VResponsive",props:A(),setup(e,c){let{slots:o}=c;const{aspectStyles:s}=ve(e),{dimensionStyles:b}=ie(e);return x(()=>{var S;return a("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[b.value,e.style]},[a("div",{class:"v-responsive__sizer",style:s.value},null),(S=o.additional)==null?void 0:S.call(o),o.default&&a("div",{class:["v-responsive__content",e.contentClass]},[o.default()])])}),{}}}),ge=F({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...A(),...W(),...se(),...oe()},"VImg"),Se=M()({name:"VImg",directives:{intersect:ue},props:ge(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,c){let{emit:o,slots:s}=c;const{backgroundColorClasses:b,backgroundColorStyles:S}=ce(Q(e,"color")),{roundedClasses:O}=de(e),y=$("VImg"),P=d(""),l=G(),n=d(e.eager?"loading":"idle"),v=d(),_=d(),i=f(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=f(()=>i.value.aspect||v.value/_.value||0);B(()=>e.src,()=>{R(n.value!=="idle")}),B(g,(t,r)=>{!t&&r&&l.value&&m(l.value)}),J(()=>R());function R(t){if(!(e.eager&&t)&&!(K&&!t&&!e.eager)){if(n.value="loading",i.value.lazySrc){const r=new Image;r.src=i.value.lazySrc,m(r,null)}i.value.src&&X(()=>{var r;o("loadstart",((r=l.value)==null?void 0:r.currentSrc)||i.value.src),setTimeout(()=>{var u;if(!y.isUnmounted)if((u=l.value)!=null&&u.complete){if(l.value.naturalWidth||C(),n.value==="error")return;g.value||m(l.value,null),n.value==="loading"&&w()}else g.value||m(l.value),I()})})}}function w(){var t;y.isUnmounted||(I(),m(l.value),n.value="loaded",o("load",((t=l.value)==null?void 0:t.currentSrc)||i.value.src))}function C(){var t;y.isUnmounted||(n.value="error",o("error",((t=l.value)==null?void 0:t.currentSrc)||i.value.src))}function I(){const t=l.value;t&&(P.value=t.currentSrc||t.src)}let z=-1;Y(()=>{clearTimeout(z)});function m(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const u=()=>{if(clearTimeout(z),y.isUnmounted)return;const{naturalHeight:V,naturalWidth:N}=t;V||N?(v.value=N,_.value=V):!t.complete&&n.value==="loading"&&r!=null?z=window.setTimeout(u,r):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,_.value=1)};u()}const k=f(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),q=()=>{var u;if(!i.value.src||n.value==="idle")return null;const t=a("img",{class:["v-img__img",k.value],style:{objectPosition:e.position},src:i.value.src,srcset:i.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:w,onError:C},null),r=(u=s.sources)==null?void 0:u.call(s);return a(h,{transition:e.transition,appear:!0},{default:()=>[U(r?a("picture",{class:"v-img__picture"},[r,t]):t,[[ae,n.value==="loaded"]])]})},D=()=>a(h,{transition:e.transition},{default:()=>[i.value.lazySrc&&n.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",k.value],style:{objectPosition:e.position},src:i.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),E=()=>s.placeholder?a(h,{transition:e.transition,appear:!0},{default:()=>[(n.value==="loading"||n.value==="error"&&!s.error)&&a("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,H=()=>s.error?a(h,{transition:e.transition,appear:!0},{default:()=>[n.value==="error"&&a("div",{class:"v-img__error"},[s.error()])]}):null,L=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,T=d(!1);{const t=B(g,r=>{r&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),t())})}return x(()=>{const t=j.filterProps(e);return U(a(j,ee({class:["v-img",{"v-img--booting":!T.value},b.value,O.value,e.class],style:[{width:te(e.width==="auto"?v.value:e.width)},S.value,e.style]},t,{aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>a(p,null,[a(q,null,null),a(D,null,null),a(L,null,null),a(E,null,null),a(H,null,null)]),default:s.default}),[[Z("intersect"),{handler:R,options:e.options},null,{once:!0}]])}),{currentSrc:P,image:l,state:n,naturalWidth:v,naturalHeight:_}}});function ye(){const e=d(!1);return re(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:f(()=>e.value?void 0:{transition:"none !important"}),isBooted:ne(e)}}export{Se as V,ge as m,ye as u};
