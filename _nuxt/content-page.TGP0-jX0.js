const c=()=>{function n(t,e){return e!=="development"?t.filter(o=>!o.draft):t}return{activeContentPages:(t,e)=>n(t,e),getContentHead:(t,e)=>({title:t,meta:[{name:"description",content:e},{name:"og:title",content:t},{name:"og:description",content:e},{name:"og:image:alt",content:t},{name:"twitter:title",content:t},{name:"twitter:image:alt",content:t},{name:"twitter:description",content:e}]})}};export{c as u};