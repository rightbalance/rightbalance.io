var i=Object.defineProperty;var _=(t,c,o)=>c in t?i(t,c,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[c]=o;var a=(t,c,o)=>(_(t,typeof c!="symbol"?c+"":c,o),o);import{aj as s,ak as r}from"./entry.sQivFXyD.js";const p=()=>({buttonClick:(e,n)=>{console.log("Analytics.buttonClick",n),s(e,{event_label:n,event_category:"button_click"})},pageView:e=>{console.log("Analytics.pageView",e),r({page_title:e})},conversionEvent:(e,n)=>{console.log("Analytics.conversionEvent",{action:e,label:n}),s(e,{event_label:n,event_category:"conversions"})}});var u=(t=>(t.FORM_SENT="form_sent",t.GET_IN_TOUCH_CLICKED="get_in_touch_clicked",t.CONTACT_CLICKED="contact_clicked",t.LETS_CHAT_CLICKED="lets_chat_clicked",t))(u||{});class l{}a(l,"applyUrl","https://airtable.com/shrn4RALUBunWkfJd"),a(l,"contactFormUrl","https://airtable.com/shr9h6C35G3nLuwoQ");export{l as C,u as a,p as u};
