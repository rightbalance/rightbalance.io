(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{313:function(t,e,o){"use strict";o.d(e,"a",(function(){return y}));o(15),o(16),o(10),o(20),o(26);var n=o(4),r=o(7),d=o(11),c=o(9),l=o(8),f=o(3),h=o(5),m=o(1),v=o(51),x=o(32);var w=function(t,e,o,desc){var n,r=arguments.length,d=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)d=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(d=(r<3?n(d):r>3?n(e,o,d):n(e,o))||d);return r>3&&d&&Object.defineProperty(e,o,d),d},y=function(t){Object(c.a)(m,t);var e,o,h=function(t){function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var o,n=Object(f.a)(t);if(e()){var r=Object(f.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(l.a)(this,o)}}(m);function m(){var t;return Object(r.a)(this,m),(t=h.apply(this,arguments)).contentPages=[],t}return Object(d.a)(m,[{key:"fetchContentPages",value:(o=Object(n.a)(regeneratorRuntime.mark((function t(e,o,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getContentPages(e,o,n);case 2:return this.contentPages=t.sent,t.abrupt("return",this.contentPages);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return o.apply(this,arguments)})},{key:"getContentPages",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e,o,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$content(e).fetch();case 2:return r=t.sent,t.abrupt("return",(r||[]).map((function(t){return{draft:!!t.draft,headerOne:t.header_one,headerTwo:t.header_two,headerThree:t.header_three,imageUrl:t.image_url,icon:t.icon,shortTitle:t.short_title,slug:t.slug,tablesOfContent:t.toc,isOpen:!!n&&t.slug===n,title:t.title,to:"/".concat(e,"/").concat(t.slug),cta:o}})));case 4:case"end":return t.stop()}}),t,this)}))),function(t,o,n){return e.apply(this,arguments)})},{key:"activeContentPages",get:function(){return v.a.currentEnvironment!==x.Environment.DEVELOPMENT?this.contentPages.filter((function(t){return!t.draft})):this.contentPages}}]),m}(m.e);y=w([m.a],y)},319:function(t,e,o){var content=o(355);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("0f2ccd2a",content,!0,{sourceMap:!1})},320:function(t,e,o){var content=o(357);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("606e4278",content,!0,{sourceMap:!1})},331:function(t,e,o){"use strict";o(15),o(16),o(10),o(20);var n=o(7),r=o(11),d=o(9),c=o(8),l=o(3),f=o(5),h=o(1),m=(o(58),{name:"ChevronUpIcon",props:{title:{type:String,default:"Chevron Up icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),v=o(6),x=Object(v.a)(m,(function(t,e){var o=e._c;return o("span",e._g(e._b({staticClass:"material-design-icon chevron-up-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[o("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"}},[o("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,w={name:"ChevronDownIcon",props:{title:{type:String,default:"Chevron Down icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},y=Object(v.a)(w,(function(t,e){var o=e._c;return o("span",e._g(e._b({staticClass:"material-design-icon chevron-down-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[o("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}},[o("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,k=o(30);var O=function(t,e,o,desc){var n,r=arguments.length,d=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)d=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(d=(r<3?n(d):r>3?n(e,o,d):n(e,o))||d);return r>3&&d&&Object.defineProperty(e,o,d),d},j=function(t){Object(d.a)(o,t);var e=function(t){function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var o,n=Object(l.a)(t);if(e()){var r=Object(l.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(c.a)(this,o)}}(o);function o(){return Object(n.a)(this,o),e.apply(this,arguments)}return Object(r.a)(o,[{key:"toggleClicked",value:function(t){this.buttonClick("TableOfContents.toggleClicked",t),this.$emit("toggle",{slug:t})}}]),o}(Object(h.c)(k.a));O([Object(h.d)({default:[]})],j.prototype,"pages",void 0),O([Object(h.d)({default:"",required:!0})],j.prototype,"linkPrefix",void 0);var C=j=O([Object(h.a)({components:{ChevronUp:x,ChevronDown:y}})],j),_=(o(354),Object(v.a)(C,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.pages,(function(e){return o("div",{key:e.slug},[o("div",{staticClass:"tocTitle"},[o("div",{staticClass:"arrow"},[e.isOpen?o("chevron-up",{attrs:{size:20},on:{click:function(o){return t.toggleClicked(e.slug)}}}):o("chevron-down",{attrs:{size:20},on:{click:function(o){return t.toggleClicked(e.slug)}}})],1),o("div",[o("span",{staticClass:"toc1",on:{click:function(o){return t.toggleClicked(e.slug)}}},[t._v(" "+t._s(e.shortTitle)+" ")])])]),o("ul",{staticClass:"tocList",class:{show:e.isOpen,hide:!e.isOpen}},t._l(e.tablesOfContent||[],(function(link){return o("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[o("NuxtLink",{attrs:{to:t.linkPrefix+"/"+e.slug+"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)])})),0)}),[],!1,null,"3d02181e",null));e.a=_.exports},333:function(t,e,o){"use strict";o(15),o(16),o(10),o(20);var n=o(7),r=o(11),d=o(9),c=o(8),l=o(3),f=o(5),h=o(1),m=o(30),v=o(90),x=o(46);var w=function(t,e,o,desc){var n,r=arguments.length,d=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)d=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(d=(r<3?n(d):r>3?n(e,o,d):n(e,o))||d);return r>3&&d&&Object.defineProperty(e,o,d),d},y=function(t){Object(d.a)(o,t);var e=function(t){function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var o,n=Object(l.a)(t);if(e()){var r=Object(l.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(c.a)(this,o)}}(o);function o(){var t;return Object(n.a)(this,o),(t=e.apply(this,arguments)).triggerModal=!1,t}return Object(r.a)(o,[{key:"showFormClicked",value:function(){this.conversionEvent(x.a.GET_IN_TOUCH_CLICKED,this.placement),this.buttonClick("GetInTouch.showFormClicked","get-in-touch"),this.triggerModal=!this.triggerModal}},{key:"ctaHeaderTextOrDefault",get:function(){return this.ctaHeaderText||this.$t("have_questions")}}]),o}(Object(h.c)(m.a));w([Object(h.d)({type:String,default:""})],y.prototype,"ctaHeaderText",void 0),w([Object(h.d)({type:String,default:"get-in-touch"})],y.prototype,"placement",void 0);var k=y=w([Object(h.a)({components:{ContactModal:v.a}})],y),O=(o(356),o(6)),component=Object(O.a)(k,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("contact-modal",{attrs:{"modal-name":"get-in-touch",placement:t.placement,trigger:t.triggerModal}}),o("h2",[t._v(" "+t._s(t.$t("get_in_touch"))+" ")]),o("div",{staticClass:"heading"},[t._v(" "+t._s(t.ctaHeaderTextOrDefault)+" ")]),o("div",{staticClass:"explainer"},[t._v(" "+t._s(t.$t("here_to_help"))+" ")]),o("button",{staticClass:"cta-button",on:{click:t.showFormClicked}},[t._v(" "+t._s(t.$t("lets_chat"))+" ")])],1)}),[],!1,null,"3a1604ae",null);e.a=component.exports},354:function(t,e,o){"use strict";var n=o(319);o.n(n).a},355:function(t,e,o){(e=o(18)(!1)).push([t.i,"li[data-v-3d02181e]{list-style-type:none}a[data-v-3d02181e]{color:#fff}.arrow[data-v-3d02181e]{margin-right:4px;color:#294dd2;cursor:pointer}.show[data-v-3d02181e]{overflow:unset;max-height:500px}.hide[data-v-3d02181e],.show[data-v-3d02181e]{transition:max-height .2s ease-out}.hide[data-v-3d02181e]{overflow:hidden;max-height:0}.toc1[data-v-3d02181e]{font-weight:800;text-decoration:none;border-bottom:.5px solid #294dd2;padding-bottom:1px;cursor:pointer}.toc2[data-v-3d02181e]{margin-left:20px}.toc3[data-v-3d02181e]{margin-left:40px}ul.tocList[data-v-3d02181e]{margin-top:0}.tocList li[data-v-3d02181e]{margin-top:.08em;margin-bottom:.08em;font-size:.875em;line-height:1.75em;font-weight:500}.tocList li a[data-v-3d02181e]{text-decoration:none;border-bottom:.5px solid transparent;padding-bottom:1px}.tocList li a[data-v-3d02181e]:hover{border-bottom:.5px solid #294dd2}.tocTitle[data-v-3d02181e]{margin-left:15px;display:flex}",""]),t.exports=e},356:function(t,e,o){"use strict";var n=o(320);o.n(n).a},357:function(t,e,o){var n=o(18),r=o(53),d=o(54),c=o(55),l=o(56),f=o(57);e=n(!1);var h=r(d),m=r(c),v=r(l),x=r(f);e.push([t.i,"body[data-v-3a1604ae],html[data-v-3a1604ae]{-webkit-overflow-scrolling:touch;overflow-scrolling:touch;scroll-behavior:auto}body[data-v-3a1604ae]{background:#000;color:#fff;text-align:center;margin:0;font-family:Montserrat,sans-serif;font-size:16px;overflow-x:hidden;overflow-y:auto}.testimonial-bg[data-v-3a1604ae]{background:#1d19ab url("+h+")}@media screen and (max-width:768px){.testimonial-bg[data-v-3a1604ae]{background-image:url("+m+")}}.diamond-bg[data-v-3a1604ae]{background:#1d19ab url("+v+")}@media screen and (max-width:768px){.diamond-bg[data-v-3a1604ae]{background-image:url("+x+')}}.close[data-v-3a1604ae]{cursor:pointer;position:absolute;right:32px;top:32px;width:32px;height:32px;opacity:.5}.close[data-v-3a1604ae]:hover{opacity:1}.close[data-v-3a1604ae]:after,.close[data-v-3a1604ae]:before{position:absolute;left:15px;content:" ";height:33px;width:2px;background-color:#fff}.close[data-v-3a1604ae]:before{transform:rotate(45deg)}.close[data-v-3a1604ae]:after{transform:rotate(-45deg)}.uppercase[data-v-3a1604ae]{text-transform:uppercase}.background[data-v-3a1604ae]{background-size:cover}.heading[data-v-3a1604ae]{font-size:2.9em;line-height:1em;font-weight:900;margin:0}@media (max-width:850px){.heading[data-v-3a1604ae]{font-size:2em}}.subheading[data-v-3a1604ae]{font-style:italic;font-weight:400;line-height:1.5em;font-size:1.17em;margin:1.5em 0;white-space:pre-line}@media screen and (max-width:850px){.subheading[data-v-3a1604ae]{font-size:.8em;line-height:1.4em}}@media screen and (max-width:850px){.can-play-webm .slide.box-slide .heading[data-v-3a1604ae],.can-play-webm .slide.diamond-bg .heading[data-v-3a1604ae]{padding-top:40px}.can-play-webm .slide.box-slide .col.thin[data-v-3a1604ae],.can-play-webm .slide.diamond-bg .col.thin[data-v-3a1604ae]{height:100vh;z-index:-1}.can-play-webm .slide.box-slide .col.thin video[data-v-3a1604ae],.can-play-webm .slide.diamond-bg .col.thin video[data-v-3a1604ae]{-o-object-fit:cover;object-fit:cover;-o-object-position:top center;object-position:top center;height:100vh;max-height:100vh}}.col[data-v-3a1604ae]{vertical-align:middle;display:table-cell;width:50%;position:relative}@media screen and (max-width:850px){.col.wide[data-v-3a1604ae]{margin:50vh 0 0}.col.thin[data-v-3a1604ae]{position:absolute;top:0;left:0;height:50vh}}@media screen and (max-width:850px){.col.thin[data-v-3a1604ae],.col.wide[data-v-3a1604ae]{display:block;width:100%;min-width:auto}}.two-thirds .wide[data-v-3a1604ae]{width:55%}.two-thirds .thin[data-v-3a1604ae]{width:45%}@media screen and (max-width:850px){.two-thirds .thin[data-v-3a1604ae],.two-thirds .wide[data-v-3a1604ae]{width:100%}}b[data-v-3a1604ae]{font-style:italic}.col .video-to-background video[data-v-3a1604ae]{max-height:100%;max-width:100%;position:absolute!important;left:-5%;top:0;bottom:0;z-index:-1;width:100%;height:100%}@media screen and (max-width:850px){.col .video-to-background video[data-v-3a1604ae]{left:0}}.col .video-to-background video.head[data-v-3a1604ae]{max-height:110%;max-width:110%;width:110%;height:110%;left:-10%;top:-5%}@media (max-width:850px){.col .video-to-background video.head[data-v-3a1604ae]{max-height:100%;max-width:100%;width:100%;height:100%;left:0;top:0}}.wrapper[data-v-3a1604ae]{position:relative}.visible .fade[data-v-3a1604ae]{opacity:1}.fade-enter-active[data-v-3a1604ae],.fade-leave-active[data-v-3a1604ae]{transition:opacity .3s}.fade[data-v-3a1604ae],.fade-enter[data-v-3a1604ae],.fade-leave-to[data-v-3a1604ae]{opacity:0}.fade[data-v-3a1604ae]{transition:opacity .3s linear}.fade.delay[data-v-3a1604ae]{transition-delay:.45s}.frame .borders[data-v-3a1604ae]{border:10px solid rgba(0,0,0,.2);border-radius:12px;box-sizing:border-box}.frame .testimonial-bg[data-v-3a1604ae]{display:table;height:100%;min-width:100%;background-size:cover;background-position:100% 0;background-repeat:no-repeat}.frame .gradient[data-v-3a1604ae]{background:rgba(0,0,0,.12);padding:10px 30px;height:100%;box-sizing:border-box;display:table-cell;vertical-align:middle}.frame .border[data-v-3a1604ae]{border-radius:100%;border:10px solid rgba(0,0,0,.2);display:inline-block;overflow:hidden}.frame img[data-v-3a1604ae]{display:block;margin:0 auto;width:194px;height:194px;background:#fff}.frame q[data-v-3a1604ae]{font-size:2.65em;line-height:1.02em;font-weight:800;text-transform:uppercase;margin:15px 0;display:block}.frame .subheading[data-v-3a1604ae]{line-height:1.5em}.frame .person[data-v-3a1604ae]{font-weight:900;font-size:1.1em;text-transform:uppercase;margin:2em 0;letter-spacing:1px}.purple-box[data-v-3a1604ae]{width:165px;height:10px;background:#ff00eb;margin:0 auto}.no-margin[data-v-3a1604ae]{margin:0}.width-100[data-v-3a1604ae]{width:100%}.video-fallback .col[data-v-3a1604ae],.video-fallback .slide .content[data-v-3a1604ae]{position:static}.video-fallback .fallback-no-bg[data-v-3a1604ae]{background:none}@media (max-width:850px){.video-fallback .fallback-no-bg .col.wide[data-v-3a1604ae]{margin-top:55vh}.video-fallback .fallback-no-bg .col.wide .video-to-background video[data-v-3a1604ae]{left:0;-o-object-fit:contain;object-fit:contain}.video-fallback .fallback-no-bg .col.wide video[data-v-3a1604ae]{max-height:100%}}.contacts-modal[data-v-3a1604ae]{display:flex;flex-direction:column;align-items:center;text-align:center}.contacts-modal button[data-v-3a1604ae]{align-self:flex-end}.disable-scroll[data-v-3a1604ae]{overflow:hidden}.v--modal-overlay[data-v-3a1604ae]{background:rgba(0,0,0,.5)}@media (max-width:850px){.v--modal[data-v-3a1604ae]{top:0!important;left:0!important;width:100%!important;height:100%!important}}.v--modal[data-v-3a1604ae]{background-color:transparent}.text[data-v-3a1604ae]{white-space:pre-line;text-align:left}.text.main[data-v-3a1604ae]{font-size:1.5em;line-height:2em;font-weight:500}.text.name[data-v-3a1604ae]{font-size:1.75em;font-weight:900;color:#294dd2;text-transform:uppercase}.text.quote[data-v-3a1604ae]{line-height:2em;max-width:390px}.text.person[data-v-3a1604ae]{font-size:1em;font-weight:900;text-transform:uppercase;line-height:1.5em}.text.description[data-v-3a1604ae]{font-size:1.25em;line-height:1.5em;font-style:italic}.text.large[data-v-3a1604ae]{font-size:3.5em}.text.small[data-v-3a1604ae]{font-size:1em}.light-mode .wrapper[data-v-3a1604ae]:not(.main-page){background-color:#fff}.light-mode .wrapper:not(.main-page) .case-study-section[data-v-3a1604ae]{border-top:none}.light-mode .wrapper:not(.main-page) .case-study-section .content .container[data-v-3a1604ae]{border-bottom:8px solid #294dd2}.light-mode .wrapper:not(.main-page) .testimonial-bg[data-v-3a1604ae]:not(.case-study-section){background:none;border-top:8px solid #294dd2}.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .gradient[data-v-3a1604ae]{background:none}.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .button[data-v-3a1604ae],.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .text[data-v-3a1604ae]{color:#294dd2!important}.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .button[data-v-3a1604ae]{border-color:#294dd2}.light-mode .wrapper:not(.main-page) header[data-v-3a1604ae]{background-color:#fff}.light-mode .wrapper:not(.main-page) .company-name[data-v-3a1604ae],.light-mode .wrapper:not(.main-page) .contact .connect-link[data-v-3a1604ae],.light-mode .wrapper:not(.main-page) .contact .contact-link[data-v-3a1604ae],.light-mode .wrapper:not(.main-page) .toggle-text[data-v-3a1604ae],.light-mode .wrapper:not(.main-page) header a[data-v-3a1604ae]{color:#000}.light-mode .wrapper:not(.main-page) .testimonial-bg.slide[data-v-3a1604ae]{background-image:none;background-color:#fff;color:#294dd2}.light-mode .wrapper:not(.main-page) .slide[data-v-3a1604ae]:not(.footer):not(.last-slide):not(.two-thirds){background-color:#fff}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) p[data-v-3a1604ae]{color:#294dd2}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text[data-v-3a1604ae]{color:#000}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text.heading[data-v-3a1604ae],.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text.name[data-v-3a1604ae],.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text.subtitle[data-v-3a1604ae]{color:#294dd2}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds).borderless .container[data-v-3a1604ae]{border:none}.light-mode .wrapper:not(.main-page) section.footer[data-v-3a1604ae]{background-color:#fff}.light-mode .wrapper:not(.main-page) section.footer .subtitle[data-v-3a1604ae]{color:#294dd2}.light-mode .wrapper:not(.main-page) section.footer footer .contacts[data-v-3a1604ae],.light-mode .wrapper:not(.main-page) section.footer footer .contacts a[data-v-3a1604ae]{color:#000}.light-mode .wrapper:not(.main-page) .head-slide .container[data-v-3a1604ae]{padding-bottom:48px}.light-mode .wrapper:not(.main-page) .purple-box[data-v-3a1604ae]{background-color:#294dd2}.light-mode .wrapper:not(.main-page) .testimonials-wrapper .testimonial-bg[data-v-3a1604ae],.light-mode .wrapper:not(.main-page) .testimonials-wrapper .testimonial-bg .person[data-v-3a1604ae]{color:#fff!important}.link-button[data-v-3a1604ae]{font-weight:900;font-size:1.1em;text-transform:uppercase;letter-spacing:1px;border:1px solid #fff;background:transparent;color:#fff;padding:.5em 2em;text-decoration:none;transition:all 1.25s cubic-bezier(.19,1,.22,1)}.link-button[data-v-3a1604ae]:hover{box-shadow:0 0 10px #fff}.link-button[data-v-3a1604ae]:active{box-shadow:inset 0 0 10px #fff}.logo[data-v-3a1604ae]{width:95px;height:95px}@media screen and (max-height:380px){.logo[data-v-3a1604ae]{width:45px;height:45px}}@media (max-height:590px){.logo[data-v-3a1604ae]{width:65px;height:65px}}button.cta-button[data-v-3a1604ae]{background:#294dd2;color:#fff;font-family:Montserrat,sans-serif;font-size:2em;font-weight:1000;border-radius:9px;border:none;outline:none;cursor:pointer;padding:.27em 1.2em .25em;margin-top:1.85em}button.cta-button[data-v-3a1604ae],h2[data-v-3a1604ae]{text-transform:uppercase}h2[data-v-3a1604ae]{color:#294dd2;font-size:1.5em;margin-top:1.25em;margin-bottom:.15em}.explainer[data-v-3a1604ae]{font-size:1.2em;font-weight:500;margin-top:5px}.heading[data-v-3a1604ae]{color:#fff;font-size:3.3em;font-weight:1000;line-height:1.1em;text-transform:uppercase;white-space:pre-line;word-break:break-word;word-wrap:break-word}@media only screen and (max-width:850px){.heading[data-v-3a1604ae]{font-size:2.5em}}',""]),t.exports=e}}]);