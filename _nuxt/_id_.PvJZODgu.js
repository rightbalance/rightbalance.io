import{_ as B}from"./ContentRendererMarkdown.vue.ywH4QrE7.js";import I from"./ContentRenderer.Nt-g2fLh.js";import{f as R,u as $,g as _,h as t,o as b,c as N,a,t as u,b as o,w as m,j as S,p as V,e as D,k as H,_ as T}from"./entry.X2CKmcuo.js";import{u as h,q as f}from"./query.3D8BTZRr.js";import{u as q}from"./vue.f36acd1f.tqbYOcLg.js";import{T as A,G as E,B as G}from"./table-of-contents.B6lmm0Ju.js";import{u as P}from"./content-page.vwM0Dmhl.js";import{C as j}from"./constants.379KeKxY.js";import"./index.1dSrIji7.js";import"./preview.tnZHi_fe.js";import"./nuxt-img.YCkENppR.js";import"./nuxt-link.lKZvheY8.js";const i=r=>(V("data-v-7e26ae4d"),r=r(),D(),r),F={key:0,class:"wrapper"},M={class:"container"},O={class:"toc"},U={class:"toc-header"},z={class:"content nuxt-content"},J={class:"title"},K=i(()=>a("h1",null,"Document not found",-1)),L=i(()=>a("hr",null,null,-1)),Q=i(()=>a("hr",null,null,-1)),W=R({__name:"[id]",async setup(r){var d,p;let e,c;const C=j.contactFormUrl,l=$(),{getContentHead:g,activeContentPages:v}=P(),y=H(),{data:n}=([e,c]=_(async()=>h(`learn-element-${l.params.id}`,async()=>(await f("learn",l.params.id).find())[0])),e=await e,c(),e);q(g(((d=n.value)==null?void 0:d.title)||"",((p=n.value)==null?void 0:p.description)||""));const{data:w}=([e,c]=_(async()=>h("learn-element",async()=>{const s=await f("learn").find();return v(s,y.public.ENV)})),e=await e,c(),e);return(s,X)=>{const x=B,k=I;return t(n)?(b(),N("div",F,[a("div",M,[a("div",O,[a("h2",U,u(s.$t("learn")),1),o(A,{pages:t(w)},null,8,["pages"])]),a("div",z,[a("h1",J,u(t(n).title),1),o(k,{value:t(n)},{empty:m(()=>[K]),default:m(()=>[o(x,{value:t(n)},null,8,["value"])]),_:1},8,["value"]),L,o(E,{class:"get-in-touch","cta-href":t(C),"cta-header-text":t(n).cta_header,"explainer-text":s.$t("here_to_help"),placement:`learn-${t(l).params.id}`},null,8,["cta-href","cta-header-text","explainer-text","placement"]),Q,o(G,{class:"badges-on-page"})])])])):S("",!0)}}}),de=T(W,[["__scopeId","data-v-7e26ae4d"]]);export{de as default};
