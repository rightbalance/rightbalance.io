(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{321:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));n(18),n(19),n(10),n(26),n(29),n(28);var o=n(3),r=(n(35),n(7)),f=n(6),d=n(12),c=n(11),l=n(4),m=n(5),h=n(2),v=n(78),x=n(33);var w=function(t,e,n,desc){var o,r=arguments.length,f=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)f=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(f=(r<3?o(f):r>3?o(e,n,f):o(e,n))||f);return r>3&&f&&Object.defineProperty(e,n,f),f},y=function(t){Object(d.a)(h,t);var e,n,m=function(t){function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,o=Object(l.a)(t);if(e()){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}(h);function h(){var t;return Object(r.a)(this,h),(t=m.apply(this,arguments)).contentPages=[],t}return Object(f.a)(h,[{key:"activeContentPages",get:function(){return this.filterActiveContentPages(this.contentPages)}},{key:"filterActiveContentPages",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.contentPages;return v.a.currentEnvironment!==x.Environment.DEVELOPMENT?t.filter((function(t){return!t.draft})):t}},{key:"fetchContentPages",value:(n=Object(o.a)(regeneratorRuntime.mark((function t(e,n,o){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getContentPages(e,n,o);case 2:return this.contentPages=t.sent,t.abrupt("return",this.contentPages);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e,o){return n.apply(this,arguments)})},{key:"getContentPages",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(e,n,o){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$content(e).fetch();case 2:return r=t.sent,t.abrupt("return",(r||[]).map((function(t){return{draft:!!t.draft,headerOne:t.header_one,headerTwo:t.header_two,headerThree:t.header_three,imageUrl:t.image_url,icon:t.icon,icons:t.icons,shortTitle:t.short_title,slug:t.slug,tablesOfContent:t.toc,isOpen:!!o&&t.slug===o,title:t.title,heroImage:t.hero_image,to:"/".concat(e,"/").concat(t.slug),cta:n}})));case 4:case"end":return t.stop()}}),t,this)}))),function(t,n,o){return e.apply(this,arguments)})},{key:"getContentSpecificHead",value:function(t){var title=t&&t.short_title?"".concat(t.short_title," | ").concat(this.$t("companyName")):this.$t("title"),e=t&&t.description?t.description:this.$t("description");return{title:title,meta:[{hid:"description",name:"description",content:e},{hid:"og:title",name:"og:title",content:title},{hid:"og:description",name:"og:description",content:e},{hid:"og:image:alt",name:"og:image:alt",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:image:alt",name:"twitter:image:alt",content:title},{hid:"twitter:description",name:"twitter:description",content:e}]}}}]),h}(h.Vue);y=w([h.Component],y)},370:function(t,e,n){var content=n(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("4007fb9c",content,!0,{sourceMap:!1})},371:function(t,e,n){var content=n(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("673c0373",content,!0,{sourceMap:!1})},415:function(t,e,n){"use strict";n(370)},416:function(t,e,n){var o=n(22),r=n(70),f=n(71),d=n(72),c=n(73),l=n(74);e=o(!1);var m=r(f),h=r(d),v=r(c),x=r(l);e.push([t.i,'body[data-v-334ff759],html[data-v-334ff759]{-webkit-overflow-scrolling:touch;overflow-scrolling:touch;scroll-behavior:auto}body[data-v-334ff759]{background:#000;color:#fff;text-align:center;margin:0;font-family:"Montserrat",sans-serif;font-size:16px;overflow-x:hidden;overflow-y:auto}.testimonial-bg[data-v-334ff759]{background:#1d19ab url('+m+")}@media screen and (max-width:768px){.testimonial-bg[data-v-334ff759]{background-image:url("+h+")}}.diamond-bg[data-v-334ff759]{background:#1d19ab url("+v+")}@media screen and (max-width:768px){.diamond-bg[data-v-334ff759]{background-image:url("+x+')}}.center-container[data-v-334ff759]{display:flex;justify-content:center}.close[data-v-334ff759]{cursor:pointer;position:absolute;right:32px;top:32px;width:32px;height:32px;opacity:.5}.close[data-v-334ff759]:hover{opacity:1}.close[data-v-334ff759]:after,.close[data-v-334ff759]:before{position:absolute;left:15px;content:" ";height:33px;width:2px;background-color:#fff}.close[data-v-334ff759]:before{transform:rotate(45deg)}.close[data-v-334ff759]:after{transform:rotate(-45deg)}.uppercase[data-v-334ff759]{text-transform:uppercase}.background[data-v-334ff759]{background-size:cover}.heading[data-v-334ff759]{font-size:2.9em;line-height:1em;font-weight:900;margin:0;text-transform:uppercase;white-space:pre-line}@media (max-width:850px){.heading[data-v-334ff759]{font-size:2em}}.subheading[data-v-334ff759]{font-style:italic;font-weight:400;line-height:1.5em;font-size:1.4em;margin:1.5em auto;max-width:70ch;white-space:pre-line}@media screen and (max-width:850px){.subheading[data-v-334ff759]{font-size:1.1em;line-height:1.4em}}@media screen and (max-width:850px){.can-play-webm .slide.box-slide .heading[data-v-334ff759],.can-play-webm .slide.diamond-bg .heading[data-v-334ff759]{padding-top:40px}.can-play-webm .slide.box-slide .col.thin[data-v-334ff759],.can-play-webm .slide.diamond-bg .col.thin[data-v-334ff759]{height:95vh;z-index:-1}.can-play-webm .slide.box-slide .col.thin video[data-v-334ff759],.can-play-webm .slide.diamond-bg .col.thin video[data-v-334ff759]{-o-object-fit:cover;object-fit:cover;-o-object-position:top center;object-position:top center;height:95vh;max-height:95vh}}.col[data-v-334ff759]{vertical-align:middle;display:table-cell;width:50%;position:relative}@media screen and (max-width:850px){.col.wide[data-v-334ff759]{margin:50vh 0 0}.col.half-margin[data-v-334ff759]{margin:33vh 0 0}.col.thin[data-v-334ff759]{position:absolute;top:0;left:0;height:50vh}}@media screen and (max-width:850px){.col.thin[data-v-334ff759],.col.wide[data-v-334ff759]{display:block;width:100%;min-width:auto}}.two-thirds .wide[data-v-334ff759]{width:55%}.two-thirds .thin[data-v-334ff759]{width:45%}@media screen and (max-width:850px){.two-thirds .thin[data-v-334ff759],.two-thirds .wide[data-v-334ff759]{width:100%}}b[data-v-334ff759]{font-style:italic}.col .video-to-background video[data-v-334ff759]{max-height:100%;max-width:100%;position:absolute!important;left:-5%;top:0;bottom:0;z-index:-1;width:100%;height:100%}@media screen and (max-width:850px){.col .video-to-background video[data-v-334ff759]{left:0}}.col .video-to-background video.head[data-v-334ff759]{max-height:110%;max-width:110%;width:110%;height:110%;left:-10%;top:-5%}@media (max-width:850px){.col .video-to-background video.head[data-v-334ff759]{max-height:100%;max-width:100%;width:100%;height:100%;left:0;top:0}}.wrapper[data-v-334ff759]{position:relative}.visible .fade[data-v-334ff759]{opacity:1}.fade-enter-active[data-v-334ff759],.fade-leave-active[data-v-334ff759]{transition:opacity .3s}.fade[data-v-334ff759],.fade-enter[data-v-334ff759],.fade-leave-to[data-v-334ff759]{opacity:0}.fade[data-v-334ff759]{transition:opacity .3s linear}.fade.delay[data-v-334ff759]{transition-delay:.45s}.frame .borders[data-v-334ff759]{border:10px solid rgba(0,0,0,.2);border-radius:12px;box-sizing:border-box}.frame .testimonial-bg[data-v-334ff759]{display:table;height:100%;min-width:100%;background-size:cover;background-position:100% 0;background-repeat:no-repeat}.frame .gradient[data-v-334ff759]{background:rgba(0,0,0,.12);padding:10px 30px;height:100%;box-sizing:border-box;display:table-cell;vertical-align:middle}.frame .border[data-v-334ff759]{border-radius:100%;border:10px solid rgba(0,0,0,.2);display:inline-block;overflow:hidden}.frame .client-photo[data-v-334ff759]{display:block;margin:0 auto;width:194px;height:194px;background:#fff}.frame q[data-v-334ff759]{font-size:2.65em;line-height:1.02em;font-weight:800;text-transform:uppercase;margin:15px 0;display:block}.frame .subheading[data-v-334ff759]{line-height:1.5em}.frame .person[data-v-334ff759]{font-weight:900;font-size:1.3em;text-transform:uppercase;margin:2em 0;letter-spacing:1px}.purple-box[data-v-334ff759]{width:165px;height:10px;background:#ff00eb;margin:0 auto}.no-margin[data-v-334ff759]{margin:0}.width-100[data-v-334ff759]{width:100%}.video-fallback .col[data-v-334ff759],.video-fallback .slide .content[data-v-334ff759]{position:static}.video-fallback .fallback-no-bg[data-v-334ff759]{background:none}@media (max-width:850px){.video-fallback .fallback-no-bg .col.wide[data-v-334ff759]{margin-top:55vh}.video-fallback .fallback-no-bg .col.wide .video-to-background video[data-v-334ff759]{left:0;-o-object-fit:contain;object-fit:contain}.video-fallback .fallback-no-bg .col.wide video[data-v-334ff759]{max-height:100%}}.contacts-modal[data-v-334ff759]{display:flex;flex-direction:column;align-items:center;text-align:center}.contacts-modal button[data-v-334ff759]{align-self:flex-end}.disable-scroll[data-v-334ff759]{overflow:hidden}.v--modal-overlay[data-v-334ff759]{background:rgba(0,0,0,.5)}@media (max-width:850px){.v--modal[data-v-334ff759]{top:0!important;left:0!important;width:100%!important;height:100%!important}}.v--modal[data-v-334ff759]{background-color:transparent}.text[data-v-334ff759]{white-space:pre-line;text-align:left}.text.main[data-v-334ff759]{font-size:1.5em;line-height:2em;font-weight:500}.text.name[data-v-334ff759]{font-size:1.75em;font-weight:900;color:#294dd2;text-transform:uppercase}.text.quote[data-v-334ff759]{line-height:2em;max-width:390px}.text.person[data-v-334ff759]{font-size:1em;font-weight:900;text-transform:uppercase;line-height:1.5em}.text.description[data-v-334ff759]{font-size:1.25em;line-height:1.5em;font-style:italic}.text.large[data-v-334ff759]{font-size:3.5em}.text.small[data-v-334ff759]{font-size:1em}.light-mode .wrapper[data-v-334ff759]:not(.main-page){background-color:#fff}.light-mode .wrapper:not(.main-page) .case-study-section[data-v-334ff759]{border-top:none}.light-mode .wrapper:not(.main-page) .case-study-section .content .container[data-v-334ff759]{border-bottom:8px solid #294dd2}.light-mode .wrapper:not(.main-page) .testimonial-bg[data-v-334ff759]:not(.case-study-section){background:none;border-top:8px solid #294dd2}.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .gradient[data-v-334ff759]{background:none}.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .button[data-v-334ff759],.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .text[data-v-334ff759]{color:#294dd2!important}.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .button[data-v-334ff759]{border-color:#294dd2}.light-mode .wrapper:not(.main-page) header[data-v-334ff759]{background-color:#fff}.light-mode .wrapper:not(.main-page) .company-name[data-v-334ff759],.light-mode .wrapper:not(.main-page) .contact .connect-link[data-v-334ff759],.light-mode .wrapper:not(.main-page) .contact .contact-link[data-v-334ff759],.light-mode .wrapper:not(.main-page) .toggle-text[data-v-334ff759],.light-mode .wrapper:not(.main-page) header a[data-v-334ff759]{color:#000}.light-mode .wrapper:not(.main-page) .testimonial-bg.slide[data-v-334ff759]{background-image:none;background-color:#fff;color:#294dd2}.light-mode .wrapper:not(.main-page) .slide[data-v-334ff759]:not(.footer):not(.last-slide):not(.two-thirds){background-color:#fff}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) p[data-v-334ff759]{color:#294dd2}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text[data-v-334ff759]{color:#000}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text.heading[data-v-334ff759],.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text.name[data-v-334ff759],.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text.subtitle[data-v-334ff759]{color:#294dd2}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds).borderless .container[data-v-334ff759]{border:none}.light-mode .wrapper:not(.main-page) section.footer[data-v-334ff759]{background-color:#fff}.light-mode .wrapper:not(.main-page) section.footer .subtitle[data-v-334ff759]{color:#294dd2}.light-mode .wrapper:not(.main-page) section.footer footer .contacts[data-v-334ff759],.light-mode .wrapper:not(.main-page) section.footer footer .contacts a[data-v-334ff759]{color:#000}.light-mode .wrapper:not(.main-page) .head-slide .container[data-v-334ff759]{padding-bottom:48px}.light-mode .wrapper:not(.main-page) .purple-box[data-v-334ff759]{background-color:#294dd2}.light-mode .wrapper:not(.main-page) .testimonials-wrapper .testimonial-bg[data-v-334ff759],.light-mode .wrapper:not(.main-page) .testimonials-wrapper .testimonial-bg .person[data-v-334ff759]{color:#fff!important}.link-button[data-v-334ff759]{font-weight:900;font-size:1.1em;text-transform:uppercase;letter-spacing:1px;border:1px solid #fff;background:transparent;color:#fff;padding:.5em 2em;text-decoration:none;transition:all 1.25s cubic-bezier(.19,1,.22,1)}.link-button[data-v-334ff759]:hover{box-shadow:0 0 10px #fff}.link-button[data-v-334ff759]:active{box-shadow:inset 0 0 10px #fff}button.cta-button[data-v-334ff759]{text-transform:uppercase;background:#294dd2;color:#fff;font-family:"Montserrat",sans-serif;font-size:2em;font-weight:1000;border-radius:9px;border:none;outline:none;cursor:pointer;padding:.27em 1.2em .25em}.badges-on-page[data-v-334ff759]{margin-top:75px}.container[data-v-334ff759]{display:flex;flex-direction:row;justify-content:center;margin-top:100px;margin-bottom:75px}.toc[data-v-334ff759]{width:33%;max-width:400px;padding-right:5%;margin-top:18px;text-align:left}@media only screen and (max-width:850px){.toc[data-v-334ff759]{display:none}}h2.toc-header[data-v-334ff759]{color:#294dd2;text-transform:uppercase;font-size:1.5em;margin-left:40px}.content[data-v-334ff759]{width:67%;max-width:800px;padding-right:5%;text-align:left}@media only screen and (max-width:850px){.content[data-v-334ff759]{width:86%}}.get-in-touch[data-v-334ff759]{margin-bottom:5em}.title[data-v-334ff759]{font-size:3.3em;line-height:1.1em;font-weight:1000;text-transform:uppercase;white-space:pre-line;word-break:break-word;word-wrap:break-word}@media only screen and (max-width:850px){.title[data-v-334ff759]{font-size:2.5em}}hr[data-v-334ff759]{border:3px solid #ff00eb;width:30%;margin-top:4em;margin-bottom:4em;margin-left:0}',""]),t.exports=e},417:function(t,e,n){"use strict";n(371)},418:function(t,e,n){(e=n(22)(!1)).push([t.i,".nuxt-content a{font-weight:800;text-decoration:none;color:#fff;border-bottom:.5px solid #294dd2;padding-bottom:1px}.nuxt-content .avatar{float:right;width:175px;height:175px;margin:1em;background:#fff;border-radius:50%}@media (max-width:850px){.nuxt-content .avatar{float:unset;width:50%;height:50%}}.nuxt-content h1{font-size:3.3em;line-height:1.1em;font-weight:1000;text-transform:uppercase;white-space:pre-line}.nuxt-content h2{color:#294dd2;text-transform:uppercase;font-size:1.5em;margin-top:1.25em;margin-bottom:.5em}.nuxt-content h2+h3,.nuxt-content h3+h4{margin-top:.75em;margin-bottom:.5em}.nuxt-content h3{font-size:1.4em;margin-top:1.25em;margin-bottom:.5em}.nuxt-content li,.nuxt-content p{font-size:1em;line-height:1.75em;font-weight:500;font-style:italic}.nuxt-content .heading{color:#fff;font-size:2.3em;font-weight:1000;line-height:1.1em;margin-top:1em;text-transform:uppercase;white-space:pre-line}.nuxt-content .heading+h2,.nuxt-content .heading+h3{margin-top:.3em}.nuxt-content img{max-width:100%;height:auto;margin-top:1em;margin-bottom:1em}.nuxt-content img.left{width:70%}@media (max-width:850px){.nuxt-content img.left{width:100%}}.nuxt-content .quote{color:#294dd2;text-transform:uppercase;font-size:1.5em;font-style:normal;font-weight:600;line-height:1.3em;margin-top:1.25em;margin-bottom:.5em}.nuxt-content .author{font-size:.9em}.nuxt-content .author,.nuxt-content .subheading{font-style:normal;font-weight:800;text-transform:uppercase}.nuxt-content .subheading{color:#294dd2;font-size:1.5em;margin-top:1.25em;margin-bottom:.5em}.nuxt-content .subsubheading{font-size:1.4em;margin-top:1.25em;margin-bottom:.5em}.nuxt-content blockquote{border-left:.2em solid #294dd2;padding-left:.75em}",""]),t.exports=e},471:function(t,e,n){"use strict";n.r(e);n(18),n(19),n(10),n(26),n(28);var o=n(3),r=(n(77),n(7)),f=n(6),d=n(12),c=n(11),l=n(4),m=n(5),h=n(2),v=n(327),x=n(326),w=n(325),y=n(75),k=n(321),j=n(76);var z=function(t,e,n,desc){var o,r=arguments.length,f=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)f=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(f=(r<3?o(f):r>3?o(e,n,f):o(e,n))||f);return r>3&&f&&Object.defineProperty(e,n,f),f},O=function(t){Object(d.a)(m,t);var e,n=function(t){function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,o=Object(l.a)(t);if(e()){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}(m);function m(){var t;return Object(r.a)(this,m),(t=n.apply(this,arguments)).ctaHref=j.a.contactFormUrl,t.page=!1,t}return Object(f.a)(m,[{key:"onToggle",value:function(t){var e=this.activeContentPages.find((function(e){return e.slug===t.slug}));e?e.isOpen=!e.isOpen:this.error("Toggling a non existent page, please investigate.",{event:t})}},{key:"head",value:function(){return this.getContentSpecificHead(this.page)}},{key:"fetch",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){var e,section,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.$router.currentRoute.params.id){t.next=3;break}return t.abrupt("return",this.$nuxt.error({statusCode:404,message:"Page not found"}));case 3:return section="learn",t.next=6,this.$content(section).where({slug:e}).fetch();case 6:if((n=t.sent)&&n.length){t.next=9;break}return t.abrupt("return",this.$nuxt.error({statusCode:404,message:"Page not found"}));case 9:return this.page=n[0],t.next=12,this.fetchContentPages(section,"read_more",e);case 12:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),m}(Object(h.mixins)(y.a,k.a)),R=O=z([Object(h.Component)({components:{Badges:v.a,GetInTouch:x.a,TableOfContents:w.a}})],O),C=(n(415),n(417),n(8)),component=Object(C.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.page?n("div",{class:{wrapper:!0}},[n("div",{staticClass:"container"},[n("div",{staticClass:"toc"},[n("h2",{staticClass:"toc-header"},[t._v(" "+t._s(t.$t("learn"))+" ")]),n("table-of-contents",{attrs:{pages:t.activeContentPages,"link-prefix":"/learn"},on:{toggle:function(e){return t.onToggle(e)}}})],1),n("div",{staticClass:"content"},[n("h1",{staticClass:"title"},[t._v(" "+t._s(t.page.title)+" ")]),n("nuxt-content",{attrs:{document:t.page}}),n("hr"),n("get-in-touch",{staticClass:"get-in-touch",attrs:{"cta-href":t.ctaHref,"cta-header-text":t.page.cta_header,placement:"learn-"+t.page.slug}}),n("hr"),n("badges",{staticClass:"badges-on-page"})],1)])]):t._e()}),[],!1,null,"334ff759",null);e.default=component.exports}}]);