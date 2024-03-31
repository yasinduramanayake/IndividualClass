import{m as i,a as f,b,c as _,o as I,d as U,q as F,r as M,e as x,f as K,g as q,x as z,h as D,z as J,A as W,i as Y}from"./VBtn--MLb7SCh.js";import{p as d,l as g,u as H,m as V,aF as m,ah as y,c as P,ap as h,n as Q,q as X,t as Z}from"./index-Djy0usjt.js";const p=d({fluid:{type:Boolean,default:!1},...i(),...f()},"VContainer"),de=g()({name:"VContainer",props:p(),setup(e,n){let{slots:t}=n;const{rtlClasses:a}=H();return b(()=>V(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},t)),{}}}),N=m.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),j=m.reduce((e,n)=>{const t="offset"+y(n);return e[t]={type:[String,Number],default:null},e},{}),L=m.reduce((e,n)=>{const t="order"+y(n);return e[t]={type:[String,Number],default:null},e},{}),S={col:Object.keys(N),offset:Object.keys(j),order:Object.keys(L)};function ee(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const s=n.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const te=["auto","start","end","center","baseline","stretch"],se=d({cols:{type:[Boolean,String,Number],default:!1},...N,offset:{type:[String,Number],default:null},...j,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:e=>te.includes(e)},...i(),...f()},"VCol"),ge=g()({name:"VCol",props:se(),setup(e,n){let{slots:t}=n;const a=P(()=>{const s=[];let l;for(l in S)S[l].forEach(o=>{const c=e[o],u=ee(l,o,c);u&&s.push(u)});const r=s.some(o=>o.startsWith("v-col-"));return s.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return h(e.tag,{class:[a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),C=["start","end","center"],$=["space-between","space-around","space-evenly"];function v(e,n){return m.reduce((t,a)=>{const s=e+y(a);return t[s]=n(),t},{})}const ne=[...C,"baseline","stretch"],w=e=>ne.includes(e),E=v("align",()=>({type:String,default:null,validator:w})),ae=[...C,...$],A=e=>ae.includes(e),R=v("justify",()=>({type:String,default:null,validator:A})),le=[...C,...$,"stretch"],B=e=>le.includes(e),O=v("alignContent",()=>({type:String,default:null,validator:B})),k={align:Object.keys(E),justify:Object.keys(R),alignContent:Object.keys(O)},oe={align:"align",justify:"justify",alignContent:"align-content"};function re(e,n,t){let a=oe[e];if(t!=null){if(n){const s=n.replace(e,"");a+=`-${s}`}return a+=`-${t}`,a.toLowerCase()}}const ce=d({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:w},...E,justify:{type:String,default:null,validator:A},...R,alignContent:{type:String,default:null,validator:B},...O,...i(),...f()},"VRow"),me=g()({name:"VRow",props:ce(),setup(e,n){let{slots:t}=n;const a=P(()=>{const s=[];let l;for(l in k)k[l].forEach(r=>{const o=e[r],c=re(l,r,o);c&&s.push(c)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return h(e.tag,{class:["v-row",a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),ue=d({color:String,..._(),...i(),...I(),...U(),...F(),...M(),...x(),...f(),...Q()},"VSheet"),ye=g()({name:"VSheet",props:ue(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=X(e),{backgroundColorClasses:s,backgroundColorStyles:l}=K(Z(e,"color")),{borderClasses:r}=q(e),{dimensionStyles:o}=z(e),{elevationClasses:c}=D(e),{locationStyles:u}=J(e),{positionClasses:T}=W(e),{roundedClasses:G}=Y(e);return b(()=>V(e.tag,{class:["v-sheet",a.value,s.value,r.value,c.value,T.value,G.value,e.class],style:[l.value,o.value,u.value,e.style]},t)),{}}});export{ye as V,de as a,me as b,ge as c};